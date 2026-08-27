import { useNavigate } from "react-router-dom";
import TukloyDiffCoffee from "../../assets/TukloyDiffCoffee.jpg";

function About() {

    const navigate = useNavigate();


    return (
        <div className="min-h-screen bg-[#F5E6D3] text-[#3B2416]">

            {/* Hero */}
            <section className="px-6 py-12 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                    Our Story
                </p>

                <h1 className="text-4xl font-bold sm:text-5xl">
                    About  Epak ni Tuks
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#6B4630]">
                    A cozy place for good coffee, good food, and good conversations.      
                </p>

                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6B4630]">
                    In other words, isang maangas na kapihan. Tukloy diff.
                </p>
            </section>

            {/* Story */}
            <section className="mx-auto max-w-5xl px-6 pb-16">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">

                    {/* Image placeholder */}
                    <div className="flex items-center justify-center rounded-4xl bg-[#D2AD8C] text-6xl p-3">
                        <img
                            src={TukloyDiffCoffee}
                            alt="Epak ni Tuks"
                            className="h-full w-full rounded-3xl object-contain"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">
                            More Than Just Coffee
                        </h2>

                        <p className="mt-4 leading-relaxed text-[#6B4630]">
                            Epak ni Tuks started with a simple idea: create a
                            welcoming space where people can slow down, magyabangan, and
                            enjoy a great cup of coffee.
                        </p>

                        <p className="mt-4 leading-relaxed text-[#6B4630]">
                            From carefully brewed coffee to freshly prepared
                            food, we believe that the little things make a
                            big difference.
                        </p>

                        <p className="mt-4 leading-relaxed text-[#6B4630]">
                            Whether you're meeting friends, working on your
                            next project, or simply taking a break, there's
                            always a seat waiting for you.
                        </p>
                    </div>

                </div>
            </section>

            {/* Values */}
            <section className="bg-[#3B2416] px-6 py-16 text-[#F5E6D3]">
                <div className="mx-auto max-w-5xl">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold">
                            What We Believe
                        </h2>

                        <p className="mt-3 text-[#C9A98D]">
                            Simple values behind every cup.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">

                        <div className="rounded-xl bg-[#4D2F20] p-6 text-center">
                            <div className="text-4xl">☕</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Great Coffee
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-[#C9A98D]">
                                We care about every cup we serve.
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#4D2F20] p-6 text-center">
                            <div className="text-4xl">❤️</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Good People
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-[#C9A98D]">
                                We want everyone to feel welcome.
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#4D2F20] p-6 text-center">
                            <div className="text-4xl">🌱</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Quality
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-[#C9A98D]">
                                We choose quality ingredients and products.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="px-6 py-16 text-center">
                <h2 className="text-3xl font-bold">
                    Come Have a Cup of Joe With Us
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-[#6B4630]">
                    Stop by Epak ni Tuks, grab your favorite drink, and make
                    yourself at home.
                </p>

                <button
                    onClick={() => navigate("/menu")}
                    className="mt-6 rounded-lg bg-[#6B4630] px-6 py-3 font-semibold text-[#F5E6D3] transition hover:bg-[#4D2F20] hover:cursor-pointer">
                    View Our Menu
                </button>
            </section>

        </div>
    );
}

export default About;