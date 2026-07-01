import { useEffect, useState } from "react";
import API from "../api/axiosInstance";

export default function Home() {
  const [stats, setStats] = useState({
    total_employees: 0,
    total_budget: 0,
    average_salary: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const result = await API.get("/employees/stats");

        if (result.status === 200) {
          setStats(result.data[0]);
        }
      } catch (error) {
        console.error("İstatistikler çekilirken hata oluştu:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a202c" }}>
        Home
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div
          className="p-6 rounded-lg shadow-sm"
          style={{ backgroundColor: "#e2e8f0" }}
        >
          <p className="text-sm font-medium text-gray-600">Toplam Çalışan</p>
          <p className="text-3xl font-bold mt-2 text-slate-800">
            {stats.total_employees} Kişi
          </p>
        </div>

        <div
          className="p-6 rounded-lg shadow-sm"
          style={{ backgroundColor: "#e2e8f0" }}
        >
          <p className="text-sm font-medium text-gray-600">
            Aylık Toplam Maaş Bütçesi
          </p>
          <p className="text-3xl font-bold mt-2 text-slate-800">
            ${Number(stats.total_budget).toLocaleString()}
          </p>
        </div>

        <div
          className="p-6 rounded-lg shadow-sm"
          style={{ backgroundColor: "#e2e8f0" }}
        >
          <p className="text-sm font-medium text-gray-600">Ortalama Maaş</p>
          <p className="text-3xl font-bold mt-2 text-slate-800">
            ${Math.round(stats.average_salary).toLocaleString()}
          </p>
        </div>
      </div>

      <div
        className="p-6 rounded-lg shadow-sm mt-4"
        style={{ backgroundColor: "#e2e8f0", color: "#2d3748" }}
      >
        <h3 className="text-lg font-semibold mb-2">
          Şirket Yönetim Paneline Hoş Geldiniz
        </h3>
        <p className="text-sm text-gray-700">
          Bu panel üzerinden personel demografik bilgilerini inceleyebilir, yeni
          çalışan ekleyebilir, çalışanları silebilir veya finansal durumları
          yönetmek için maaş güncellemeleri yapabilirsiniz.
        </p>
      </div>
      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 backdrop-blur-sm max-w-2xl my-4">
        <div className="flex gap-3">
          <span className="text-xl">🤖</span>
          <div>
            <h3 className="font-semibold text-amber-900 text-sm">
              Demo & Portfolyo Modu
            </h3>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              Bu proje canlı bir MySQL veritabanına bağlıdır. Herkes veri
              ekleyip silebildiği için gördüğünüz veriler değişiklik
              gösterebilir. Düzeni korumak adına veritabanı
              <strong>
                {" "}
                her 15 dakikada bir otomatik olarak sıfırlanmaktadır.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
