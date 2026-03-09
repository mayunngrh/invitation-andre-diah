export function formatTimeAgo(dateString: string) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return "Baru saja";

    const minutes = Math.floor(diff / 60);
    if (minutes < 60) return `${minutes} menit lalu`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} jam lalu`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} hari lalu`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} minggu lalu`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} bulan lalu`;

    const years = Math.floor(days / 365);
    return `${years} tahun lalu`;
}