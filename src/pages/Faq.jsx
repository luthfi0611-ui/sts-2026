import { Link } from "react-router";

export default function Faq() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl font-bold">
        FAQ
      </h1>

      <p className="mt-4">
        Pilih pertanyaan yang ingin kamu lihat.
      </p>

      <div className="mt-6 space-y-3">
        <Link to="/faq/1" className="block underline">
          Cara Mendaftar Akun
        </Link>

        <Link to="/faq/2" className="block underline">
          Metode Pembayaran
        </Link>

        <Link to="/faq/3" className="block underline">
          Kebijakan Pengembalian
        </Link>
      </div>
    </div>
  );
}