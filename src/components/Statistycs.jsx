import React, { useEffect, useState } from 'react'
import { NAME_RESTAURANT } from '../utils/logo'
import { useInView } from 'react-intersection-observer'; //npm install react-intersection-observer

export default function Statistycs() {

    const { ref, inView } = useInView({ triggerOnce: true });
    const [counts, setCounts] = useState({ members: 0, donations: 0, specialists: 0, dalicases: 0 });

    useEffect(() => {
        if (inView) {
            const targetCounts = { members: 175, donations: 158, specialists: 250, dalicases: 145 };
            const duration = 2500; // Длительность анимации в миллисекундах
            const startTime = performance.now();

            const animate = (time) => {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1); // Прогресс от 0 до 1
                const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out функция

                setCounts({
                    members: Math.floor(targetCounts.members * easedProgress),
                    donations: Math.floor(targetCounts.donations * easedProgress),
                    specialists: Math.floor(targetCounts.specialists * easedProgress),
                    dalicases: Math.floor(targetCounts.dalicases * easedProgress),
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [inView]);

    return (
        <div className="layout2" ref={ref}>
            <div className='static'>
                <div className="static-blok">
                    <div className="static-blok__section static-blok__section-1">
                        <div className="static-blok__section__part">
                            <img src="/images/statistycs/stat-1.png" alt={`${NAME_RESTAURANT}`} />
                        </div>
                        <div className="static-blok__section__part">
                            <h1>{counts.members} +</h1>
                        </div>
                        <div className="static-blok__section__part">
                            <p>Members</p>
                        </div>
                    </div>
                    <div className="static-blok__section static-blok__section-2">
                        <div className="static-blok__section__part">
                            <img src="/images/statistycs/stat-2.png" alt={`${NAME_RESTAURANT}`} />
                        </div>
                        <div className="static-blok__section__part">
                            <h1>{counts.donations} +</h1>
                        </div>
                        <div className="static-blok__section__part">
                            <p>Donations</p>
                        </div>
                    </div>
                    <div className="static-blok__section static-blok__section-3">
                        <div className="static-blok__section__part">
                            <img src="/images/statistycs/stat-3.png" alt={`${NAME_RESTAURANT}`} />
                        </div>
                        <div className="static-blok__section__part">
                            <h1>{counts.specialists} +</h1>
                        </div>
                        <div className="static-blok__section__part">
                            <p>Specialist</p>
                        </div>
                    </div>
                    <div className="static-blok__section static-blok__section-4">
                        <div className="static-blok__section__part">
                            <img src="/images/statistycs/stat-4.png" alt={`${NAME_RESTAURANT}`} />
                        </div>
                        <div className="static-blok__section__part">
                            <h1>{counts.dalicases} +</h1>
                        </div>
                        <div className="static-blok__section__part">
                            <p>Dalicases</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};