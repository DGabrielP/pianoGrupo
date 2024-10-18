
import Head from '../components/head';
import Game from '../components/game'; 
 
export default function PageOne() {
  return (
    <>
      <Head />
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Game />
      </main>
    </>
  );
}
