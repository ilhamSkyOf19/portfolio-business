export interface ContactType {
  nama: string;
  email: string;
  wa: string;
  jenisLayanan:
    | "Landing Page Profesional"
    | "Sistem & Aplikasi Bisnis"
    | "Aplikasi Mobile"
    | "Aplikasi Desktop"
    | "Full Custom Development";
  estimasiBudget: "lt-3jt" | "3jt-7jt" | "7jt-10jt" | "gt-10jt";
  pesan: string;
  isAgree: boolean;
}
