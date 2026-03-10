import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import { supabase } from "../services/supabase";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type Greeting = {
  id: string;
  name: string | null;
  message: string;
  attendance: string;
  created_at: string;
};

const Greetings = () => {
  const PAGE_SIZE = 10;

  const [greetings, setGreetings] = useState<Greeting[]>([]);
  const [totalGreetings, setTotalGreetings] = useState(0);
  const [attendance, setAttendance] = useState("Hadir");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const controls = useAnimation();

  const CONTAINER_HEIGHT = 420;

  const getMaxDrag = () => {
    if (!innerRef.current) return 0;
    const innerHeight = innerRef.current.scrollHeight;
    return Math.max(0, innerHeight - CONTAINER_HEIGHT);
  };

  const fetchGreetings = async (pageNumber = 0) => {
    const from = pageNumber * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, count } = await supabase
      .from("greetings")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (!data) return;

    if (count !== null) {
      setTotalGreetings(count);
    }

    if (data.length < PAGE_SIZE) {
      setHasMore(false);
    }

    if (pageNumber === 0) {
      setGreetings(data);
      // Reset scroll position when refreshing
      y.set(0);
    } else {
      setGreetings((prev) => [...prev, ...data]);
    }
  };

  useEffect(() => {
    if (initialized) return;
    setInitialized(true);
    fetchGreetings(0);
  }, [initialized]);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoadingMore(true);
    setPage(nextPage);
    await fetchGreetings(nextPage);
    setLoadingMore(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    setLoading(true);

    await supabase.from("greetings").insert([
      {
        name: name || "Anonim",
        message,
        attendance,
      },
    ]);

    setName("");
    setMessage("");
    setLoading(false);

    setPage(0);
    setHasMore(true);
    fetchGreetings(0);
  };

  const renderCard = (item: Greeting, index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="border border-white/20 rounded-[30px] p-6 text-black shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold">{item.name}</p>
        <span className="text-xs text-gray-500">
          {formatTimeAgo(item.created_at)}
        </span>
      </div>

      <p
        className={`text-xs inline-block px-3 py-1 rounded-full mb-3 ${item.attendance === "Hadir"
          ? "bg-green-500/20 text-green-700"
          : "bg-red-500/20 text-red-700"
          }`}
      >
        {item.attendance}
      </p>

      <p className="text-black/80">{item.message}</p>
    </motion.div>
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-16">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-serif text-black uppercase tracking-[0.3em]">
          Ucapan & Doa
        </h2>
        <div className="w-20 h-[1px] bg-gray-400 mx-auto mt-4" />
        <div className="w-20 h-[1px] bg-white/40 mx-auto mt-4" />
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
        className="
          border border-white/20
          rounded-[40px]
          p-8
          mb-12
          max-w-3xl
          mx-auto
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        "
      >
        <input
          type="text"
          placeholder="Nama (boleh kosong)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            w-full mb-4 p-3 rounded-xl
            bg-white/10 border border-black/20
            text-black outline-none
          "
        />

        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          className="
            w-full mb-4 px-12 rounded-xl
            bg-white/10 border border-black/20
            text-black outline-none
          "
        >
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>

        <textarea
          placeholder="Tulis ucapan dan doa..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="
            w-full mb-4 p-3 rounded-xl
            bg-white/10 border border-black/20
            text-black outline-none
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-full
            border border-black/30
            hover:bg-black hover:text-white
            transition duration-300
          "
        >
          {loading ? "Mengirim..." : "Kirim Ucapan"}
        </button>
      </motion.form>

      <div className="w-full flex justify-center text-gray-300 mb-6">
        {totalGreetings} Ucapan & Doa Tulus
      </div>

      <div
        ref={containerRef}
        className="max-w-5xl mx-auto px-6 relative"
        style={{
          height: `${CONTAINER_HEIGHT}px`,
          overflow: isMobile ? "hidden" : "auto",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        {isMobile ? (
          <motion.div
            ref={innerRef}
            drag="y"
            dragDirectionLock
            dragConstraints={{
              top: -(getMaxDrag()),
              bottom: 0,
            }}
            dragElastic={0.1}
            dragMomentum
            style={{ y }}
            animate={controls}
            className="space-y-6 cursor-grab active:cursor-grabbing"
          >
            {greetings.map((item, index) => renderCard(item, index))}
          </motion.div>
        ) : (
          <div className="space-y-6 overflow-y-auto p-12 h-full">
            {greetings.map((item, index) => renderCard(item, index))}
          </div>
        )}
      </div>

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="
              px-6 py-2 rounded-full
              border border-black/30
              hover:bg-black hover:text-white
              transition
              flex items-center gap-2
              justify-center mx-auto
            "
          >
            {loadingMore ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Greetings;