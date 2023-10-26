import layoutStyles from '@/styles/layout.module.css';

export default function Home() {
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <h2>Ding's TODO List</h2>
      </header>
      <main></main>
    </div>
  )
}
