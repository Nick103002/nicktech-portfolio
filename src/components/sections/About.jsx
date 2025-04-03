import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {

    const frontendSkills = ['React', 'TailwaindCSS', 'HTMl'];
    const backendSkills = ['PHP Laravel', 'Java Spring boot', 'C# .net', 'Sql'];


    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-blod mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"> {" "}About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">Add something Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis minima aperiam corporis illum libero et earum officia soluta obcaecati quidem alias expedita quaerat voluptate, unde sunt, nesciunt perspiciatis reiciendis neque?</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-blod mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shodow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-blod mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shodow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 spase-y-2">
                            <li>
                                <strong>Diploma in Electronics and communication</strong> - Mumbai  Univercity (2018-2020)
                            </li>
                            <li>
                                <strong>Internships:</strong> IoT and Interfacing Boards.
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-blod mb-4"> 💼 Work Exprince</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semiblod"> Software Developer at ABC (2020 to Present)</h4>
                                <p>Developed & maintained microservices web applications</p>
                            </div>
                            <div>
                                <h4 className="font-semiblod"> Intern at ABC (2019)</h4>
                                <p>Assisted in building frontend components & integrating REST APIs. Aso building a REST APIs at backend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}

