import { siteConfig } from '@/config/siteConfig';
import { useContactPrefill } from '@/hooks/useContactPrefill';

interface Program {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  inquirySubject: string;
}

interface AlternatingSectionProps {
  programs: Program[];
  intro?: string[];
}

const USE_TEST_IMAGE = true;
const TEST_IMAGE_SRC = '/images/shows/test.jpg';

function chunkPairs<T>(arr: T[]): Array<[T, T?]> {
  const out: Array<[T, T?]> = [];
  for (let i = 0; i < arr.length; i += 2) out.push([arr[i], arr[i + 1]]);
  return out;
}

export default function AlternatingSection({ programs, intro }: AlternatingSectionProps) {
  const { scrollToContact } = useContactPrefill();
  const rows = chunkPairs(programs);

  return (
    <div>
      {intro && intro.length > 0 && (
        <div className="max-w-2xl mb-12 space-y-4">
          {intro.map((p, i) => (
            <p
              key={i}
              className="text-foreground/80 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {p}
            </p>
          ))}
        </div>
      )}

      <div className="space-y-12 md:space-y-16 outline-red-500">
      {/* <div className="flex flex-col gap-16 md:gap-20"> */}
      {/* <div className="flex flex-col gap-16 md:gap-20 outline outline-2 outline-red-500"> */}
      {/* <div className="flex flex-col gap-40 outline outline-2 outline-red-500"> */}
        {rows.map(([a, b]) => (
          <div key={a.slug} className="flex flex-col md:flex-row gap-10 md:gap-12">
            <ProgramItem program={a} onInquire={scrollToContact} />
            {b ? <ProgramItem program={b} onInquire={scrollToContact} /> : <div className="hidden md:block flex-1" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgramItem({
  program,
  onInquire,
}: {
  program: Program;
  onInquire: (prefill?: string) => void;
}) {
  const imgSrc = USE_TEST_IMAGE ? TEST_IMAGE_SRC : program.imageSrc;

  return (
    <div className="flex-1 min-w-0">
      {/* Intermediate container: (image | text) */}
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <div style={{ width: '120px', height: '120px' }} className="overflow-hidden bg-muted/20">
            <img
              src={imgSrc}
              alt={program.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = siteConfig.ui.placeholderImageSrc;
              }}
            />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-lg md:text-xl mb-2 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            {program.title}
          </h3>

          <p className="text-foreground/75 leading-relaxed mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            {program.description}
          </p>

          <button
            onClick={() => onInquire(program.inquirySubject)}
            className="text-sm text-foreground/60 hover:text-foreground hover:font-medium transition-all"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Inquire →
          </button>
        </div>
      </div>
    </div>
  );
}