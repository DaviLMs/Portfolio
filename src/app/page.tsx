'use client'
import Bar from "@/componentes/Bar"
import backgroundImg from '../Image/wallpaper.webp'
import { useEffect, useRef, useState } from "react";
import backgroundImG2 from '../Image/wallpaper.jpeg'
import escudo from '../Image/escudo.webp'
import MovieClip from '../componentes/MovieClip'
import folha from '../Image/folha.jpg'
import { ProgressBar } from 'primereact/progressbar';

export default function Home() {
  
  const [comentario, setComentarios] = useState();
  
  const textos = [
    "Davi Lamarca é um desenvolvedor apaixonado por tecnologia, com experiência em JavaScript, TypeScript, Node.js, React Native e desenvolvimento web.",
    "Com foco em criar soluções eficientes e escaláveis, está começando sua jornada no mundo da programação, buscando sempre aprender e melhorar suas habilidades.",
    "Davi se dedica a construir interfaces intuitivas e a trabalhar com BFF, conectando sistemas para oferecer experiências excepcionais aos usuários."
  ];
  
  const [indiceTexto, setIndiceTexto] = useState(0);

  async function comentarios() {
    const request = await fetch('https://dummyjson.com/comments');
    const response = await request.json();
    console.log(response);
    setComentarios(response);
  }

  useEffect(() => {
    comentarios();
  }, []);
  
  const tec = ['Javascript', 'NodeJS', 'React Js', 'React Native'];
  const sectionRef = useRef<HTMLDivElement>(null); 

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    }
  };

  const Typewriter = ({ texto, delay }: { texto: string, delay: number }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < texto.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + texto[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      }
      
      if (currentIndex === texto.length && indiceTexto < textos.length - 1) {
        setTimeout(() => {
          setIndiceTexto(indiceTexto + 1); 
        }, 2500); 
        if (currentIndex === textos.length) {
          setTimeout(() => {
      setIndiceTexto((prev) => (prev + 1) % textos.length)
          }, 2500)
          setCurrentText('')
          setCurrentIndex(0)
        }
      }
    }, [currentIndex, delay, texto, indiceTexto]);

    return <span>{currentText}</span>;
  };

  return (
    <>
        <div 
          style={{
            backgroundImage: `url(${backgroundImg.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '90vh',
          position: 'relative',
            borderRadius: 100
          }}
        >
          <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 300 }}>
              <div style={{ height: '120px', display: 'flex', flexDirection: 'row', gap: 25 }}>
                <h2 style={{ fontSize: 40, fontFamily: 'monospace' }}>Olá, me chamo </h2>
                <h2 style={{ fontSize: 40, color: '#fdf6b3', fontFamily: 'monospace' }}>Davi Lamarca!</h2>
              </div>
              <div style={{ height: '120px', width: '500px', display: 'flex', flexDirection: 'row', gap: 15, textAlign: 'center', alignItems: 'center' }}>
                <h2 style={{ fontSize: 25, color: '#fdf6b3', fontFamily: 'monospace' }}>
                <Typewriter texto={textos[indiceTexto]} delay={40} />
                
              </h2>
              
            </div>
            
            </section>
          </main>
        </div>

        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '20px', 
            gap: 20,   
            backgroundImage: `url(${backgroundImG2.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '50vh',
            position: 'relative',
          }}
      >

          <h2 style={{ textAlign: 'center', fontSize: 25, fontFamily: 'monospace', color: '#fff9c1' }}>Principais tecnologias</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tec.map((valor, index) => (
              <li key={index} style={{ fontSize: 25, color: '#fff', marginBottom: '10px', fontFamily:'monospace', textAlign:"center" }}>
                {valor}
              </li>
            ))}
        </ul>
        <div >
        </div>

        </div>
        <div style={{ alignContent: "center", display: 'flex', flexDirection: "row", gap: 500, justifyContent: "center", alignSelf: 'center', marginTop: 50 }}>
  <div style={{ display: "flex", flexDirection: "column", width: 250, gap: 10 }}>
    <h1 style={{ textAlign: 'center', fontWeight: "bold", fontSize: 25, color: '#fff493' }}>Segurança</h1>
    <p style={{ textAlign: 'center',fontSize: 20 }}>
      Sim, todos os sites que desenvo lvo são projetados com  <span style={{ color: '#fff493', fontWeight: 'bold' }}>segurança</span> em mente. Eu tomo medidas rigorosas para proteger os dados dos usuários e evitar qualquer tipo de ataque, garantindo que eles possam navegar de forma segura.
    </p>
  </div>
  <div style={{ display: "flex", flexDirection: "column", width: 250, gap: 10 }}>
    <h1 style={{ textAlign: 'center', fontWeight: "bold", fontSize: 25, color: '#fff493' }}>Designer</h1>
    <p style={{ textAlign: 'center', fontSize: 20 }}>
      Um design bonito também precisa ser funcional. Meus projetos são feitos com foco na experiência do usuário <span style={{ color: '#fff493', fontWeight: "bold" }}>(UX)</span>, garantindo que o design seja intuitivo e fácil de navegar. Cada elemento é pensado para ajudar os usuários a encontrarem o que precisam de forma eficiente e simples.
    </p>
    </div>
      </div>
      <h2 style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginTop: 100}}>Video</h2>
      <div style={{ backgroundColor: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
<MovieClip />
      </div>

        <div style={{ height: '30vh', backgroundColor: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
      <Bar />
      <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '20px', 
            gap: 20,   
            backgroundImage: `url(${folha.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '30vh',
          position: 'relative',
            borderRadius: 100
          }}
        >
          
        </div>
    </>
  );
}
