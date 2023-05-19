import React from 'react'
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import logoIIITL from "../components/IIITL.png"
import logoNitP from "../components/National_Institute_of_Technology,_Patna_Logo.png"
import logoIIITsricity from "../components/logoIIITsricity.jpg"
import mainakPhoto from "../components/Dr.-Mainak-Adhikari.jpg"
export const Homepage = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div className='text-black py-10'>
            <div className='px-36 flex flex-col'>
                <div className='hover:scale-125 hover:duration-700 transition-all'>
                    <h1 className='pt-10 pb-2 text-gray-500 text-2xl font-semibold'>Special Issue on <span className='text-green-500'>D</span>istributed <span className='text-green-500'>M</span>achine <span className='text-green-500'>L</span>earning for
                        Edge/Fog Computing: <br></br>Challenges and Future Directions</h1>
                    <h2 className='pb-8 text-gray-500'>14<sup>th</sup>-17<sup>th</sup> Nov, 2023 - Physical Conference * - Abu Dhabi, UAE</h2>
                </div>
                <p className='text-left text-gray-700'>The intersection of Distributed Machine Learning (<span className='text-green-500'>DML</span>) and edge computing is a promising area of study that
                    offers big opportunities for many different industries and domains. As this field continues to develop, there
                    are a lot of interesting opportunities and paths to look into. When you combine machine learning models and
                    algorithms with edge devices, you can make decisions in real time and based on the situation. This makes
                    edge intelligence better. This integration has the potential to greatly improve the performance, efficiency,
                    and autonomy of edge devices in a wide range of uses, such as autonomous vehicles, smart cities, industrial
                    automation, and healthcare. Federated learning, a decentralised way to train machine learning models, is likely
                    to advance more in edge computing. Future study will focus on making federated learning algorithms more
                    efficient and safer, looking into new communication and aggregation strategies, and solving problems involving
                    privacy, security, and fairness. Also, edge devices and cloud systems will work together more smoothly and to
                    their mutual benefit. You can better balance work and resources between the edge and the cloud by sending
                    computation-intensive jobs like training complex models to the cloud and using edge resources for real-time
                    inference and decision-making. Latency, bandwidth, energy use, and privacy needs will be important factors in
                    this collaboration.
                    <br></br>
                    <br></br>
                    Edge computing will be very important for preparing data, extracting features, and analysing data. By
                    letting raw sensor data be processed and useful insights extracted at the edge, it won’t be necessary to send
                    large amounts of data to the cloud. This will save bandwidth and reduce delay. Future study will focus on making
                    efficient edge-assisted data analytics techniques, such as distributed feature extraction, data compression, and
                    anomaly detection. When global machine learning and edge computing are put together, privacy and security
                    will still be very important. The next steps will be to create machine learning algorithms for edge devices that
                    protect privacy, set up safe and trusted communication protocols, and build strong defences against adversarial
                    attacks. A key focus area will be finding a balance between the need for data protection and the benefits
                    of distributed learning and edge intelligence. Distributed machine learning and edge computing will have
                    industry-specific uses in the future. <span className='text-green-500'>DML</span> and edge computing will be used by industries like healthcare,
                    manufacturing, transportation, agriculture, and energy to make real-time tracking, predictive maintenance,
                    personalised services, and efficient use of resources easier. Future study will look into these areas’ unique
                    problems and opportunities and try to come up with solutions that meet their specific needs.</p>
                <br></br>
                <h2 className='text-left text-xl'>Topics</h2>
                <p className='text-left'>
                    <br></br>
                    Topics of interest for this special session include, but are not limited to:
                    <ul className='text-left px-10'>
                        <br></br>
                        <li>Green communication for collaborative DML-enabled in edge networks</li>
                        <li>Graph-based ML for sustainable communication and computation in edge networks.</li>
                        <li>Sustainable computation and communications for future generation DML-enabled IoT application.</li>
                        <li>DML and novel security mechanisms/protocol for edge networks.</li>
                        <li>Collaborative DML approaches for edge-enabled production/smart education/smart grid applications.</li>
                        <li>Representation learning and Industry 5.0 for autonomous Distributed Compute Continuum</li>
                        <li>DML techniques for edge-enabled Industry 5.0/Healthcare/Smart City/Smart Agriculture/Smart Envi-
                            ronment Monitoring.</li>
                        <li>Distributed/Federated learning technique for training and data sharing in latency-critical data.</li>
                        <li>DML and Blockchain-based technology for edge-enabled IoT applications.</li>
                        <li>DML-based data/information integration in edge-supported application.</li>
                        <li>DML and sustainable environment for the future digital society in edge networks.</li>
                        <li>Advanced mobility management and DML scheme for edge-enabled transportation systems.</li>
                    </ul>
                </p>
                <h1 className='py-10 text-gray-500 text-2xl font-semibold'><span className='text-green-500'>O</span>rganisations</h1>
                <div className='flex flex-col justify-between ml-36 md:flex-row'>
                    <div className="w-full flex h-28"><img src={logoIIITL}></img></div>
                    <div className="w-full flex h-28"><img src={logoNitP}></img></div>
                    <div className="w-full flex h-28"><img src={logoIIITsricity}></img></div>
                </div>
                <h1 className='py-10 text-gray-500 text-2xl font-semibold'><span className='text-green-500'>Q</span>uestions and <span className='text-green-500'>f</span>urther <span className='text-green-500'>i</span>nformation</h1>
                <div className='flex flex-row items-center justify-center gap-10'>
                <p><a href="https://iiitl.ac.in/index.php/personnel/dr-mainak-adhikari/"><img className='w-full rounded-full h-28 md:h-36 md:w-36 pt-1 border-[6px] border-white bg-white shadow-lg shadow-cyan-200' src={mainakPhoto}></img></a></p>
                <p className='text-gray-500'><a href="https://iiitl.ac.in/index.php/personnel/dr-mainak-adhikari/">Dr. Mainak Adhikari</a> <br></br> mainak@iiitl.ac.in</p>
                </div>
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    background: {
                        color: {
                            value: "#ffffff",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "attract",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#1a75ff",
                            opacity: 0.3
                        },
                        links: {
                            color: "#1a75ff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        interactivity: {
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: "push,"
                                },
                                resize: true
                            }

                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>

    )
}
