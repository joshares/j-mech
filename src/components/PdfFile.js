import React from "react";
import { Page, Text, Image, StyleSheet, Document } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    marginLeft: 42,
    paddingTop: 35,
    paddingBottom: 65,
    margin: 14,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  content: {
    paddingHorizontal: 220,
    marginTop:65,
  }
});
const PdfFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title} fixed>
          Heading
        </Text>
        <Text style={styles.content}>
          I barely knew Philip, but as a clergyman I have no problem telling his
          most intimate friends all about him. Bender, quit destroying the
          universe! I meant `physically`. Look, perhaps you could let me work
          for a little food? I could clean the floors or paint a fence, or
          service you sexually? For example, if you killed your grandfather,
          you`d cease to exist! As an interesting side note, as a head without a
          body, I envy the dead. What kind of a father would I be if I said no?
          Have you ever tried just turning off the TV, sitting down with your
          children, and hitting them? Who`s brave enough to fly into something
          we all keep calling a death sphere? I love you, buddy! I love this
          planet! I`ve got wealth, fame, and access to the depths of sleaze that
          those things bring. Bender, we`re trying our best. Anyone who laughs
          is a communist! Oh, I always feared he might run off like this. Why,
          why, why didn`t I break his legs? Bender?! You stole the atom. Tell
          them I hate them. Hey, tell me something. You`ve got all this money.
          How come you always dress like you`re doing your laundry? It`s okay,
          Bender. I like cooking too. Now that the, uh, garbage ball is in
          space, Doctor, perhaps you can help me with my sexual inhibitions?
          Moving along… Good news, everyone! I`ve taught the toaster to feel
          love! You, minion. Lift my arm. AFTER HIM! Have you ever tried just
          turning off the TV, sitting down with your children, and hitting them?
          Humans dating robots is sick. You people wonder why I`m still single?
          It`s `cause all the fine robot sisters are dating humans! Kif might!
          Look, everyone wants to be like Germany, but do we really have the
          pure strength of `will`? Hey, what kinda party is this? There`s no
          booze and only one hooker. I saw you with those two `ladies of the
          evening` at Elzars. Explain that. Oh, I don`t have time for this. I
          have to go and buy a single piece of fruit with a coupon and then
          return it, making people wait behind me while I complain.
        </Text>
      </Page>
    </Document>
  );
};

export default PdfFile;
