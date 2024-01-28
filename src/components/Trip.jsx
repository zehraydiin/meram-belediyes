import "./TripApp.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1>Tevazu, Samimiyet ve Gayretle</h1>
      <p>Bizim Meram İçin Çalışıyoruz</p>
      <div className="tripcard">
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1_327.jpg"}
            heading="TENZİLE ANA HASTA KONUKEVİ"
            text="Meram Belediyesinin hasta ve hasta yakınları için otel konforunda hizmet veren Tenzile Ana Hasta Konukevi, 2023 yılında yaklaşık 17 bin, son beş yılda 73 bin, bugüne kadar ise yaklaşık 155 bin hasta ve hasta yakınını misafir etti. Tenzile Ana Hasta Konukevi’nin sosyal belediyeciliğin en güzel örneklerinden biri olduğunu söyleyen Meram Belediye Başkanı Mustafa Kavuş, hizmetin kendi alanında önemli bir açığı kapattığına işaret etti.
            BAŞKAN KAVUŞ; “HEMŞEHRİLERİMİZİN İHTİYAÇ DUYDUĞU HER YERDE BİZ VARIZ”
            Hasta Konukevinin, şehir dışından Necmettin Erbakan Üniversitesi Tıp Fakültesi Hastanesine tedavi olmak için gelen hastalara ve yakınlarına ücretsiz konaklama hizmeti verdiğini ifade eden Başkan Kavuş, “Tesis, alanında önemli bir açığı kapatıyor. En zor günlerinde vatandaşlarımıza sıcak bir yuva ortamı sunuyor. 42 odası ile aynı anda 84 kişiye hizmet verebiliyor. Bugüne kadar neredeyse Meram nüfusunun yarısı kadar misafir ağırladığı düşünüldüğünde nedenli önemli bir görev ifa ettiği daha net anlaşılmaktadır. Meram Belediyesi doğumdan ölüme, iyi günden kötü güne her zaman vatandaşlarının yanında olmuştur. Tenzile Ana Konukevi de bu düşüncenin bir yansıması olarak hizmet vermeye devam etmektedir. Allah ihtiyaç hissettirmesin ama hissettirdiğinde de bizler hemşehrilerimizin yanındayız” diye konuştu."
         />
         <TripData 
            image={"	https://misgibi.erbakan.edu.tr/public/uploads/pages/1704352596_52edf52b76ed4a189bcd.jpg"}
            heading="DOSD MERAM DOWN SENDROMLU BİREYLER YAŞAM DESTEK MERKEZİ"
            text="Özgün eğitim yöntemi ile
            kişiselleştirebilir bir eğitim
            DOSD Meram olarak erken eğitim anlayışı ve bütüncül bir yaklaşımla paydaşlar arası iş birliği temelindeki eğitimi esas alıyoruz.
            Standartlardan
            +1 daha farklı
            bir dünya inşa ediyoruz.
            Down Sendromlu bireyler ve ailelerinin gündelik hayatlarını kolaylaştıracak hizmetlere imza atmayı, Down Sendromu konusunda yaşanan küresel gelişmeleri Türkiye’ye uyarlamayı ve bu alanda faaliyet gösteren diğer kurumlara öncü olmayı hedefliyoruz..
            "
         />
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/WhatsApp-Image-2024-01-06-at-22.48.20-1.jpeg"}
            heading="MERAM GELİŞLİM AKADEMİSİ MEGA"
            text="Meram Belediyesinin hayata geçirdiği yeni nesil eğitim projesi Meram Gelişim Akademisi (MEGA), her yıl 75 bin öğrencinin hayatına dokunuyor. Ahlaki karakter eğitimini merkeze alarak yeni nesli, yeni nesil eğitim yöntemleriyle tanıştıran ve bilim, sanat, yaşam, doğa, sağlık ve spor eğitimleriyle yeni bir çığır açan MEGA ortaya koyduğu projelerle her yıl olduğu gibi 2023’ün de yıldızı oldu."
         />
         
       </div>
    </div>
  );
}

export default Trip;