import { useState, useEffect } from "react";
import { doc, onSnapshot, increment, updateDoc } from "firebase/firestore";
import { Info, FolderKanban, Code2 } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { db, VISITAS_COLLECTION, VISITAS_DOC_ID } from "../../lib/firebase";
import { getProjects } from "../../data/projects";
import { getAllTechnologies } from "../../data/projects";

function useVisitasCount(): number | null {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const visitasRef = doc(db, VISITAS_COLLECTION, VISITAS_DOC_ID);

    const incrementVisit = async () => {
      try {
        await updateDoc(visitasRef, { contador: increment(1) });
      } catch {
        // Ignore; may fail if rules deny write
      }
    };

    incrementVisit();

    const unsubscribe = onSnapshot(
      visitasRef,
      (snapshot) => {
        const data = snapshot.data();
        const value = data?.contador;
        setCount(typeof value === "number" ? value : 0);
      },
      () => setCount(0)
    );

    return () => unsubscribe();
  }, []);

  return count;
}

export default function StatisticsSection() {
  const { translations, language } = useLanguage();
  const visitasCount = useVisitasCount();
  const projectsCount = getProjects(language).length;
  const technologiesCount = getAllTechnologies().length;
  const t = translations.statistics;

  return (
    <section className="px-4 py-8 md:py-12" aria-label="Statistics">
      <div className="mx-auto max-w-5xl rounded-2xl border border-base-content/20 bg-base-200 px-6 py-8 shadow-xl md:px-10 md:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          <div className="flex flex-col items-center text-center md:border-r md:border-dotted md:border-base-content/20 md:pr-8">
            <span className="text-sm font-medium text-base-content/60">
              {t.visits}
            </span>
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-base-content md:text-5xl">
                {visitasCount !== null ? visitasCount.toLocaleString() : "—"}
              </span>
              <Info className="h-5 w-5 text-info md:h-6 md:w-6" aria-hidden />
            </div>
            <span className="mt-1 text-sm text-base-content/60">
              {t.visitsSubtitle}
            </span>
          </div>

          <div className="flex flex-col items-center text-center md:border-r md:border-dotted md:border-base-content/20 md:px-8">
            <span className="text-sm font-medium text-base-content/60">
              {t.projects}
            </span>
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-base-content md:text-5xl">
                {projectsCount}
              </span>
              <FolderKanban className="h-5 w-5 text-info md:h-6 md:w-6" aria-hidden />
            </div>
            <span className="mt-1 text-sm text-base-content/60">
              {t.projectsSubtitle}
            </span>
          </div>

          <div className="flex flex-col items-center text-center md:pl-8">
            <span className="text-sm font-medium text-base-content/60">
              {t.languagesFrameworks}
            </span>
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-base-content md:text-5xl">
                +{technologiesCount}
              </span>
              <Code2 className="h-5 w-5 text-info md:h-6 md:w-6" aria-hidden />
            </div>
            <span className="mt-1 text-sm text-base-content/60">
              {t.languagesSubtitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
