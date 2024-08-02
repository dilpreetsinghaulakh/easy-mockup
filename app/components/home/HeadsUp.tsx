export default function HeadsUp() {
  return (
    <main className="sm:max-w-xl lg:max-w-3xl sm:mx-auto font-mono bg-amber-500/10 dark:bg-amber-500/5 flex flex-col gap-2 sm:rounded-2xl border-y sm:border border-dashed border-amber-500 dark:border-amber-500/50">
      <h3 className="font-sans text-xl mt-4 mx-4">Note 📝</h3>
      <div className="border-dashed border-t border-amber-500 dark:border-amber-500/50 h-full"></div>
      <p className="text-sm text-justify text-text-secondary mt-2 mb-4 mx-4">
        This project is still in development and ready to use{" "}
        <span className="font-bold text-text-primary">only in React</span> and
        its frameworks. The project is still in its early stages and may have
        some bugs.
      </p>
    </main>
  );
}
