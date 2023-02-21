<template>
    <div>
        <main>
          <nav class="navbar" id="navbar" :class="{ 'is-hidden': !showHeader }">
            <a href="http://localhost:8080/"><font-awesome-icon icon="fa-solid fa-house" /></a>
            <template v-for="(element, i) in elements" :key="i">
              <a :href="element.path" v-if="element.path.startsWith('http')" class="hua" >{{ element.name }}</a>
              <router-link :to="element.path" v-else class="hua">{{ element.name }}</router-link>
            </template>
          </nav>
            <div class="aboutus">
              <h1>Zespół Szkół Technicznych im. Eugeniusza Kwiatkowskiego</h1>
              <h2>Jaką szkołą jesteśmy?</h2>
              <p><span>Zespół Szkół Technicznych</span> im. Eugeniusza Kwiatkowskiego to szkoła położona w spokojnej dzielnicy miasta, na ulicy <span>Matuszczaka</span>, która jest boczną ulicy Podkarpackiej. Jesteśmy szkołą o silnej pozycji na edukacyjnym rynku miasta i regionu. Dewizą Zespołu Szkół Technicznych jest fakt, że zawsze staramy się pamiętać, że w szkole najważniejszy jest uczeń, duszą są nauczyciele, wsparciem rodzice, a dumą absolwenci.</p>
              <h2>Kierunki kształcenia w Zespole Szkół Technicznych</h2>
              <p>W skład Zespołu Szkół Technicznych wchodzi <span>Technikum Nr 9</span> oraz <span>Liceum Ogólnokształcące Nr XIV</span> o nachyleniu wojskowym. Szkoła proponuje atrakcyjne i przyszłościowe kierunki kształcenia: <span>technik informatyk, technik programista, technik reklamy, technik elektronik</span> oraz<span> technik mechanik</span> . Naszą misją jest kształcenie doskonałych fachowców do pracy w przemyśle i gospodarce, odpowiednio przygotowanych do podjęcia studiów wyższych. Naszym kapitałem jest młody człowiek, który nam zaufał. Staramy się budować zaufanie, aby uczniowie wierzyli we własne możliwości, nie bali się marzyć i osiągać wyznaczonych celów.</p>
              <div class="imgContainer">
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i4.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i5.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i6.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i7.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i8.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i9.webp" alt="">-->
              </div>
                <h2>ZST - lokalny lider współpracy międzynarodowej</h2>
                <p>Dzięki wytężonej pracy wielu osób nasi wychowankowie korzystają z możliwości kształcenia i rozwoju osobistego, jakie otwierają się dla nich dzięki udziałowi w projektach współfinansowanych ze środków Unii Europejskiej, których jesteśmy organizatorem od ponad 20 lat. Dzięki wieloletniej i owocnej współpracy z partnerami z <span>Niemiec, Hiszpanii, Włoch, Grecji, Finlandii, Portugalii czy Irlandii</span> zrealizowaliśmy i obecnie realizujemy przedsięwzięcia w ramach <span>programów Erasmus+, POWER, Leonardo da Vinci, Comenius, Młodzież w Działaniu oraz Akcji e-Twinning</span>. Do dziś w różnego rodzaju projektach zagranicznych wzięło udział prawie 3 tys. uczniów.</p>
              <div class="imgContainer">
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i4.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i5.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i6.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i7.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i8.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i1.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i2.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i3.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i4.webp" alt="">-->
              </div>
              <h2>Nowoczesna baza dydaktyczna wizytówką szkoły</h2>
              <p>Kształcenie zawodowe i specjalistyczne dzięki nowoczesnej bazie dydaktycznej, jaką dysponuje szkoła oraz profesjonalnej i kreatywnej kadrze nauczycielskiej odbywa się na wysokim poziomie. Posiadamy dziesięć nowoczesnych pracowni komputerowych wyposażonych w komputery PC, licencjonowane - specjalistyczne oprogramowanie, multimedialne projektory, laptopy oraz tablice interaktywne. Oprócz tego uczniowie mają do dyspozycji pracownie specjalistyczne do nauczania mechatroniki, automatyki oraz elektroniki, a także nowoczesną aulę z systemem multimedialnym - oferujemy naszym uczniom optymalne warunki do podnoszenia wiedzy i umiejętności.</p>
              <p>Patrzymy odważnie w przyszłość otwierając wciąż nowe kierunki kształcenia i dostosowując edukację zawodową naszej szkoły do lokalnego i europejskiego rynku pracy. Łamiemy bariery architektoniczne, dostosowując szkołę do potrzeb osób z niepełnosprawnością ruchową. Część budynku ogólnodydaktyczna posiada podjazdy, windę, łazienkę dla osób niepełnosprawnych, część dydaktyczno-zawodowa podjazdy, kolejną windę oraz łazienki dla osób niepełnosprawnych . Szkoła posiada wyznaczone miejsce parkingowe dla osób z niepełnosprawnością ruchową. W celu przemieszczenia między częścią ogólnodydaktyczną, a dydaktyczno-zawodową można wykorzystać łącznik zakończony z jednej strony windą, z drugiej podjazdem.</p>
              <p>Rozwijamy pasje naszych uczniów poprzez szeroki wachlarz zajęć pozalekcyjnych m.in. w szkole działa teatr szkolny "Odlewnia talentów", koło elektroniczne, koło multimedialne, koło informatyczne, akustyczne i strzeleckie.</p>
              <div class="imgContainer">
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i4.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i5.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i6.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i7.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i8.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i1.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i2.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i3.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i4.webp" alt="">-->
              </div>
              <h2>Nasi partnerzy</h2>
              <p>Poprzez współpracę z czołowymi firmami miasta i regionu (<span>ZETO Rzeszów, Asseco Poland S.A., Pratt & Whitney S.A., Teknia Rzeszów, Fibrain, G2A, ROXART Studio Sp. z o.o., Siemens, BSH, WBX Studio Graficzne, PrimeBit Game S.A.</span> ) oraz uczelniami wyższymi ( <span>Politechnika Rzeszowska, Uniwersytet Rzeszowski, Wyższa Szkołą Informatyki i Zarządzania w Rzeszowie</span> ) szkoła na bieżąco dostosowuje treści kształcenia do aktualnego stanu wiedzy z danej dziedziny.</p>
              <h2>Innowacje w dydaktyce techniczno - zawodowej</h2>
              <p>Dzięki współpracy z firmą <span>Siemens</span> jako jedyna szkoła na Podkarpaciu i jedna z niewielu w Polsce możemy organizować dla uczniów <span>Certyfikowane Kursy Firmy Siemens</span>. Dołączamy do systemu edukacji <span>P-TECH</span> (inicjatywa firmy IBM) z firmą <span>Asseco Poland S.A.</span> jako partnerem programu. Korzyść dla szkoły z tego tytułu to przede wszystkim edukacja dająca pracę, uczeń zdobywa aktualną wiedzę i umiejętności a nauczyciel jest moderatorem nauki. Dzięki temu nasi absolwenci będą skutecznie przygotowani do nowych zawodów i nieuchronnych zmian. Głównym celem projektu P-TECH jest wsparcie lokalnych społeczności przez odpowiednie przygotowanie młodzieży do pracy w zawodach o specjalności informatycznej, które oprócz zdobycia dyplomu ukończenia szkoły średniej, wymagają odpowiednich umiejętności, jednak niekoniecznie kilkuletnich studiów wyższych. Autorskie rozwiązania programowe opracowywane przez nauczycieli są na bieżąco konsultowane i wdrażane we współpracy ze specjalistami z w/w firm i uczelni. Naszym uczniom zapewniamy także płatne staże i praktyki w renomowanych firmach miasta i regionu.</p>
              <h2>Sport i rekreacja w Zespole Szkół Technicznych</h2>
              <p>W szkole realizujemy szeroki zakres sportowych pasji naszych uczniów. Wiodącą rolę w upowszechnianiu zdrowego stylu życia wśród młodzieży wiedzie <span>Komisja Kultury Fizycznej i Promocji Zdrowia</span>, organizując szereg pozalekcyjnych zajęć sportowych takich jak: <span>szkolna liga piłki nożnej, szkolna liga piłki siatkowej, zajęcia w ramach SKS obejmujące: koszykówkę, siatkówkę, tenis ziemny oraz tenis stołowy</span>. Dla pasjonatów sportów zimowych organizowane są liczne wyjazdy na narty bądź łyżwy. W działaniach tych pomaga nam bogate zaplecze sportowe - uczniowie mają do dyspozycji salę gimnastyczną, nowoczesną pełnowymiarową halę sportową oraz od 2019 roku sportowy obiekt wielofunkcyjny, który powstał dzięki zaangażowaniu nauczycieli i uczniów szkoły w ramach RBO. Dowodem na to, że sport pełni bardzo ważną rolę w rozwoju młodzieży mogą być wspaniałe zdjęcia wykonane przez naszych uczniów i absolwentów. Wdrażając nowoczesne rozwiązania techniczne, wsparte o najnowsze technologie staramy się rozwijać potencjał naszych uczniów, zaś stosując innowacyjne rozwiązania oraz partnerskie metody współpracy na linii nauczyciel- uczeń, dążymy do zdobycia pozycji lidera w branży edukacyjnej.</p>
              <div class="imgContainer">
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i4.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i5.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i6.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i7.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i8.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i1.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i2.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i3.webp" alt="">-->
<!--                <img src="@/assets/images/jobsViews/InformaticanView/i4.webp" alt="">-->
              </div>
            </div>
        </main>
    </div>
</template>
<script>
  export default {
    data: () => ({
      elements: [
        {
          name: 'Pracowicy szkoły',
          path: '/'
        },
        {
          name: 'Współpraca Instytucjonalna',
          path: '/timetable/2AT'
        },
        {
          name: 'Nasza historia',
          path: '/timetable/3AT'
        },
        {
          name: 'Eugeniusz Kwiatkowski',
          path: '/timetable/4AT'
        }
      ]
    })
  }
</script>
<style lang="less" src="@/assets/style/views/aboutus/aboutus.less"/>

