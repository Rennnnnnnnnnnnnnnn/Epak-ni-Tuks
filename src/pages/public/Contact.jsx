function Contact() {
    return (
        <div className="max-h-screen bg-[#F5E6D3] px-6 py-17 text-[#3B2416]">

            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                    Get in Touch
                </p>

                <h1 className="mt-2 text-5xl font-bold">
                    Contact Us
                </h1>

                <p className="mt-4 text-lg text-[#6B4630]">
                    Have a question? We'd love to hear from you.
                </p>

            </div>

            {/* Contact Content */}
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">

                {/* Information */}
                <div className="rounded-2xl bg-[#3B2416] p-8 text-[#F5E6D3]">

                    <h2 className="text-2xl font-bold">
                        Visit   Epak ni Tuks
                    </h2>

                    <p className="mt-3 text-[#C9A98D]">
                        Come by for a cup of coffee or simply drop us a
                        message.
                    </p>

                    <div className="mt-8 space-y-6">

                        <div>
                            <p className="text-sm font-semibold text-[#C68B59]">
                                📍 Address
                            </p>

                            <p className="mt-1 text-[#F5E6D3]">
                                123 Coffee Street
                                <br />
                                Pagsanjan, Laguna, Philippines
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#C68B59]">
                                ☎️ Phone
                            </p>

                            <p className="mt-1">
                                +63 912 345 6789
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#C68B59]">
                                ✉️ Email
                            </p>

                            <p className="mt-1">
                                emailnitukloy@.com
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#C68B59]">
                                🕐 Opening Hours
                            </p>

                            <p className="mt-1">
                                24 hours a day
                                <br />
                                365 days a year
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="rounded-2xl bg-white/60 p-8">

                    <h2 className="text-2xl font-bold">
                        Send Us a Message
                    </h2>

                    <div className="mt-6 space-y-5">

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-lg border border-[#D2AD8C] bg-[#FFF9F3] px-4 py-3 outline-none focus:border-[#A66A3F]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-[#D2AD8C] bg-[#FFF9F3] px-4 py-3 outline-none focus:border-[#A66A3F]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-lg border border-[#D2AD8C] bg-[#FFF9F3] px-4 py-3 outline-none focus:border-[#A66A3F]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#6B4630] px-6 py-3 font-semibold text-[#F5E6D3] transition hover:bg-[#4D2F20]"
                        >
                            Send Message
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Contact;