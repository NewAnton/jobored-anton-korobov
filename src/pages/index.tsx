import styles from "@/styles/pages/Home.module.scss";

import Layout from "@/components/layout";
import { SignUp } from "@/components/SignUp/SignUp";

export default function Home() {
  return (
    <Layout>
      <section className={styles.homePage}>
        <h1>Welcome to my site!</h1>
        <SignUp />
      </section>
    </Layout>
  );
}
