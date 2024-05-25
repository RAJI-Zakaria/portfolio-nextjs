import Image from "next/image";

const ProficiencySpectrum = () => {
  const icons = [
    "/next.svg",
    "/nodeJS.svg",
    "/git.svg",
    "/docker.svg",
    "/linux.svg",
    "/agile.svg",
  ];
  return (
    <section className="mx-auto sm:w-auto lg:w-551 text-center space-y-3 mb-40">
      <h2 className="text-lg font-semibold uppercase">Proficiency Spectrum</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="flex justify-center items-center group rounded-lg border border-transparent border-gray-900 bg-white text-neutral-900 dark:text-neutral-100 dark:bg-neutral-900/30 dark:border-neutral-900 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={icon}
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProficiencySpectrum;
