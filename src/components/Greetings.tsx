import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../services/supabase";

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
  const [attendance, setAttendance] = useState("Hadir");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const fetchGreetings = async (pageNumber = 0) => {
    const from = pageNumber * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data } = await supabase
      .from("greetings")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (!data) return;

    if (data.length < PAGE_SIZE) {
      setHasMore(false);
    }

    if (pageNumber === 0) {
      setGreetings(data);
    } else {
      setGreetings((prev) => [...prev, ...data]);
    }
  };

  useEffect(() => {
    if (initialized) return;
    setInitialized(true);
    fetchGreetings(0);
  }, [initialized]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchGreetings(nextPage);
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

  return (
    <section className="relative py-24 px-6 md:px-16">
      {/* Title */}
      <div className="text-center mb-16">
        <h2
          className="text-2xl md:text-4xl font-serif text-black uppercase tracking-[0.3em]">
          Ucapan & Doa
        </h2>
        <div className="w-20 h-[1px] bg-white/40 mx-auto mt-4" />
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="
          bg-white/5
          backdrop-blur-md
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
            w-full
            mb-4
            p-3
            rounded-xl
            bg-white/10
            border border-black/20
            text-black
            outline-none
          "
        />

        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          className="
          w-full
          mb-4
          px-12
          rounded-xl
          bg-white/10
          border border-black/20
          text-black
          outline-none
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
            w-full
            mb-4
            p-3
            rounded-xl
            bg-white/10
            border border-black/20
            text-black
            outline-none
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-3
            rounded-full
            border border-black/30
            hover:bg-black hover:text-white
            transition duration-300
          "
        >
          {loading ? "Mengirim..." : "Kirim Ucapan"}
        </button>
      </motion.form>

      {/* Greeting List */}
      <div className="max-w-5xl mx-auto space-y-6 max-h-[500px] overflow-y-auto">
        {greetings.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="
              bg-white/5
              backdrop-blur-md
              border border-white/20
              rounded-[30px]
              p-6
              m-12
              text-black
              shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            "
          >
            <p className="font-semibold mb-2">{item.name}</p>
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
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="
        px-6 py-2
        rounded-full
        border border-white/30
        hover:bg-white hover:text-black
        transition
      "
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Greetings;
