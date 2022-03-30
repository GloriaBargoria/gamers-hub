// import CategoryCard from "../components/CatergoryCard";
import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://i.ibb.co/f831Rtg/playstation-g70017f0c2-640.jpg" name="Xbox" />
        <CategoryCard image="https://i.ibb.co/FqH9gg3/controller-g26b15c20d-640.jpg" name="PS5" />
        <CategoryCard image="https://i.ibb.co/4j1BmGm/cube-g9333ef7c6-640.jpg" name="Switch" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://i.ibb.co/ZNk5Gds/laptop-g4382e18c5-640.jpg" name="PC" />
        <CategoryCard
          image="https://i.ibb.co/ZG3KmjP/puzzle-g80d353240-640.jpg"
          name="Accessories"
        />
      </div>
    </main>
  );
};
export default HomePage;