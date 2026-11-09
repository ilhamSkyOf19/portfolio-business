export type WorkflowItem = {
  id: number;
  title: string;
  description: string;
};

export const workflowData: WorkflowItem[] = [
  {
    id: 1,
    title: "Diskusi & Perencanaan",
    description:
      "Kami memahami kebutuhan, tujuan, dan fitur yang Anda inginkan sebelum memulai pengerjaan.",
  },
  {
    id: 2,
    title: "Desain & Pengembangan",
    description:
      "Kami merancang tampilan dan membangun website atau aplikasi sesuai kebutuhan proyek Anda.",
  },
  {
    id: 3,
    title: "Pengujian & Perbaikan",
    description:
      "Kami memastikan setiap fitur berjalan dengan baik, tampilan responsif, dan sistem berfungsi sesuai harapan.",
  },
  {
    id: 4,
    title: "Peluncuran & Serah Terima",
    description:
      "Website atau aplikasi siap digunakan. Kami juga membantu proses publikasi dan memberikan panduan penggunaan.",
  },
];
