import "./ActivityApp.css"
import ActivityData from "./ActivityData"
import Mountain1 from  "../assets/1.jpg"
import Mountain2 from  "../assets/2.jpg"
import Mountain3 from  "../assets/3.jpg"
import  Mountain4 from  "../assets/4.jpg"

const Activity = () =>{
    return(
        <div className="activity">
            <h1>Berlika Trafik Eğitim Parkı</h1>
            <p>2014 yılında yapımı tamamlanan Berlika Parkı içerisinde bulunan eğlence alanı revize edilmiştir. Bu revize sonucunda 3500 m²’ lik alan çocuklara yönelik trafik eğitim parkı olarak tasarlanmış olup halkımızın hizmetine sunulmuştur. Revizyon Kapsamında; Basketbol ve voleybol saha tellerinin yenileme ve bakımı, 1930 m² koşu yolunun bakımı, Kafeterya binasının restorasyonu, 1111 m² asfalt serimi yapılmıştır. Peyzaj çalışması olarak 45 adet ağaç, 160 adet gül ve 10.146 adet çalı türü dikilmiş ve trafik eğitim parkı içerisine 500 m² çim ekimi yapılmıştır.</p>

            <ActivityData
            className="first-act"
            heading="Yenice Parkı"
            text="YENİCE PARKI 10,336 TOPLAM İNŞAAT ALANI OLUP İÇERİSİNDE ; - KAFEMERAM - SÜS HAVUZLARI -YEŞİL ALANLAR -KAMERİYELER -ÇOCUK OYUN ALANLARI VE FİTNESS GRUPLARI -HIZ DÖNENCESİ -YÜRÜYÜŞ YOLLARI BULUNMAKTADIR."
            img1={"https://www.meram.bel.tr/upload/medya/DJI_0002_1200_1.jpg	"}
            img2={"	"}
            />

            <ActivityData
            className="first-act-reverse"
            heading="Yeniyol Trafik Parkı"
            text=" Revize çalışmasına 01.06.2020 tarihinde başlamış olup, 5026 m² proje alanı içerisinde 12 adet kameriye, 1 adet oyun grubu, 1 adet kafeterya, 1 adet bay-bayan ve engelli wc ile trafik eğitim alanı yapılmıştır. 1070 m bordür, 1840 m² parke, 225 mtül ferforje yapımı ve 903 m² asfalt kaplaması yapılmış olan parkta 1475 m² çim ekimi, 270 adet ağaç (Ihlamur, süs elması, erguvan, ladin vb.), 336 adet gül, 8300 adet mevsimlik bitki dikimi ile peyzaj çalışması tamamlanmıştır."
            img1={"https://www.meram.bel.tr/upload/medya/MG_4303_1200_1.jpg	"}
            />
        </div>

    )
}

export default Activity