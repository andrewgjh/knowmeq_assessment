import earthIcon from "../../assets/images/earth.png";
import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
  return (
    <section className={styles.sectionAboutContainer}>
      <h1 className={styles.aboutUsHeader}>About Us</h1>
      <main className={styles.content}>
        <div>
          <p>
            I'm baby tonx pop-up humblebrag schlitz fingerstache snackwave
            dreamcatcher cred, kogi praxis. Raw denim tattooed enamel pin
            slow-carb poke. Plaid hammock sustainable quinoa narwhal, humblebrag
            tbh. Vegan PBR&B selfies gastropub four loko irony vape tumeric
            twee. Adaptogen schlitz ethical helvetica austin poutine fashion axe
            distillery art party beard biodiesel church-key affogato vegan.
            Keffiyeh typewriter direct trade offal meggings plaid intelligentsia
            ascot tbh selfies marfa prism migas shaman franzen.
          </p>
          <br />
          <p>
            {" "}
            Cornhole lyft vinyl meditation, cloud bread shoreditch street art
            palo santo irony. Lomo mukbang hexagon roof party pabst. Health goth
            selvage chartreuse bodega boys master cleanse, chicharrones blue
            bottle kombucha forage air plant fixie vice four dollar toast
            knausgaard actually. Raclette church-key offal 90's jianbing big
            mood knausgaard. Asymmetrical bruh drinking vinegar XOXO. Aesthetic
            subway tile lumbersexual, authentic fingerstache semiotics
            humblebrag roof party deep v man braid. Ascot tonx franzen swag
            heirloom. Skateboard flexitarian semiotics, +1 single-origin coffee
            kinfolk glossier hoodie celiac big mood cred. Sriracha dreamcatcher
            DIY squid bodega boys taxidermy lomo raw denim shaman mlkshk praxis
            street art seitan.
          </p>{" "}
          <br />
          <p>
            Ascot franzen iPhone shoreditch tbh. Hexagon ugh hot chicken, lyft
            edison bulb microdosing viral. Chartreuse subway tile vape
            thundercats. Bodega boys skateboard pitchfork austin try-hard. Next
            level Brooklyn viral chia green juice neutra you probably haven't
            heard of them. Kickstarter meggings semiotics umami health goth
            seitan. Tacos snackwave enamel pin man bun narwhal hella fashion
            axe. Organic typewriter PBR&B cornhole yes plz stumptown man bun
            small batch disrupt tousled. Kale chips iPhone fingerstache offal
            big mood. Chia pok pok kitsch helvetica cloud bread master cleanse
            occupy pop-up. Organic humblebrag asymmetrical raclette man bun
            freegan bushwick trust fund twee. Four loko DSA flexitarian disrupt
            prism ethical, leggings lo-fi. Dummy text? More like dummy thicc
            text, amirite?
          </p>
        </div>
        <img src={earthIcon} alt="earth" />
      </main>
    </section>
  );
};

export default AboutUsPage;
