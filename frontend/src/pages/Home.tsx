import heroImage from "@/assets/Images/hero_text.svg"
export default function Home(){

    return(
    <>

    <main>
       <section className="bg-[#F5F3E9] px-6 pt-12 md:px-16 md:pt-16">

      {/* Hero text */}
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full bg-[#D5EAD5] px-3 py-1 text-sm font-medium tracking-wide text-[#287344]">
          YOUR JOURNEY, YOUR PACE
        </span>

        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#294C3B] md:text-5xl">
          Become a little more you, every day.
        </h1>

        <p className="mt-5 max-w-5xl text-base leading-relaxed text-[#68796E] md:text-xl">
          A space to understand yourself, build meaningful habits,
          and grow without the pressure of perfection.
        </p>

        <a
          href="/register"
          className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#426C52] px-5 py-4 font-semibold text-white transition duration-300 hover:bg-[#31563F] hover:shadow-lg"
        >
          Begin your journey
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Botanical illustration */}

    <div className="mx-auto mt-5 max-w-7xl overflow-hidden rounded-t-[28px]">
    <img
        src={heroImage}
        alt="Watercolor mountains with small hikers at different heights and the words 'A little progress is still progress.'"
        className="block h-auto w-full"
    />
    </div>

    </section>

        {/* About */}
        <section id="about" className="bg-[#EDEFE5] px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#81977C]">
              A DIFFERENT KIND OF GROWTH
            </p>

            <h2 className="text-3xl font-semibold leading-snug md:text-5xl">
              You don't have to have
              <br className="hidden md:block" />
              everything figured out.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#718071]">
              Some days you move forward. Some days you pause. Sometimes you
              start all over again. That's okay. Growth isn't about being
              perfect; it's about understanding yourself a little better.
            </p>
          </div>
        </section>

        {/* Three pillars */}
        <section id="how-it-works" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#81977C]">
                YOUR SPACE, YOUR PACE
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                A little support along the way.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-[#EAEDE2] p-8">
                <span className="text-3xl"><i className="fa-solid fa-brain"></i></span>
                <h3 className="mt-6 text-xl font-semibold">Understand</h3>
                <p className="mt-3 leading-7 text-[#718071]">
                  Get to know your patterns, emotions, motivations, and what
                  matters to you.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F1E8DD] p-8">
                <span className="text-3xl"><i className="fa-solid fa-seedling"></i></span>
                <h3 className="mt-6 text-xl font-semibold">Build</h3>
                <p className="mt-3 leading-7 text-[#81756A]">
                  Create small, meaningful habits that fit into your actual
                  life.
                </p>
              </div>

              <div className="rounded-3xl bg-[#E9E7EF] p-8">
                <span className="text-3xl"><i class="fa-duotone fa-solid fa-hand-holding-heart"></i></span>
                <h3 className="mt-6 text-xl font-semibold">Reconnect</h3>
                <p className="mt-3 leading-7 text-[#777387]">
                  When things don't go as planned, find your way back without
                  guilt or judgement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#365943] px-7 py-16 text-center text-white md:px-16">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Your journey starts with you.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#D9E5D8]">
              No pressure to become someone else. Just a chance to understand
              who you are and where you want to go.
            </p>
            <a
              href="/register"
              className="mt-8 inline-block rounded-full bg-[#F7F5ED] px-8 py-4 text-sm font-semibold text-[#365943] transition hover:-translate-y-1"
            >
              Let's begin →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E4E5DA] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#879184] md:flex-row">
          <p className="font-semibold text-[#365943]">rooted.</p>
          <p>Growing looks different on everyone. © 2026</p>
        </div>
      </footer>


    </>

  );
}
