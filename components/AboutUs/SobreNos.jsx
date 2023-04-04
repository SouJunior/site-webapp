import React from "react";
import styles from "./Sobrenos.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AiFillLinkedin} from "react-icons/ai";
import { FaDiscord  } from "react-icons/fa";
import { headers } from "../../utils/headers";




export const SobreNos = () =>{

  

  return(
    <>
    <section className={styles.container}>
    
       <h1>Sobre Nós</h1>
       <div className={styles.border}>
       <p> O projeto SouJunior surgiu em 01 de Julho de 2019, a partir da insatisfação do idealizador Wouerner Brandão com o mercado tech, quando percebeu que poucas pessoas tinham conhecimento ou experiência na área da tecnologia. Atualmente contamos com mais de 120 voluntários.<br/><br/>

      Com o intuito de fomentar a ideia de levar conhecimento e aprendizado numa área em ascensão, Wouerner reuniu algumas pessoas com o mesmo propósito de criar o projeto SouJunior. Preparando assim os profissionais juniores para o mercado por meio da construção de produtos e do conhecimento prático do dia a dia de uma empresa de tecnologia, desde o início, colocando a “mão na massa”.<br/><br/>

      Para que essa iniciativa se torne real, contamos com um time de voluntários, desde iniciantes no mercado de tecnologia até profissionais experientes, que atuam como mentores e lideram os times.<br/><br/>

      A SouJunior contará com um portfólio de produtos que proporcionará visibilidade aos juniores, os conectando tanto aos profissionais de recrutamento, para que a tão almejada primeira experiência seja alcançada, quanto aos mentores que irão orientá-los em sua jornada profissional que está apenas começando.<br/><br/>

      Portanto, participar da SouJunior é uma grande chance de adquirir experiência e de participar de um projeto de alta visibilidade, com o amparo de uma rede de apoio, além do networking e conexão com novas oportunidades.
            
    </p>
    </div>   

    </section>

    <section className={styles.interview}>
      <h1>Entrevista o CEO da Sou Junior - Wouerner Brandão</h1>

      <div className={styles.brandao}>
        <img src="https://github.com/wouerner.png" alt="foto de perfil Wouerner Brandão"/>

        <div>
        <h2>Wouerner Brandão <br/> CEO SouJunior</h2>
        <p> Wouerner Brandão é natural de Brasília, casado, pai do Erik, reside no Recanto das Emas e recentemente trabalhou em órgãos federais em Brasília.</p>
        
          <ul>
            <li>
              <a 
                href="https://www.linkedin.com/in/wouerner/"
                target="_blank"
                rel="noreferrer">
                    <AiFillLinkedin/>
              </a>
            </li>

            <li>
              <a 
                href="https://discordapp.com/users/502651078685360129" 
                target="_blank"
                rel="noreferrer">
                  <FaDiscord/>
              </a>
            </li>
          </ul>
        
          <p></p>
          

        </div>
      </div>

      <div className={styles.accordion} >
      <Accordion  style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center",  padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className={styles.h1} >Como e quando foi iniciar na carreira de tecnologia?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          Iniciei a carreira na área de tecnologia no ano de 2010 como 
          estagiário, permanecendo 1 ano e 2 meses. Após essa experiência,
          nquistei uma colocação de contrato CLT. Estudei bacharelado na
           área de sistemas por 4 anos, e nos últimos 12 anos atuo profissionalmente em programação
            nas linguagens de PHP e JavaScript, no cargo de desenvolvedor Sênior na empresa eNe Soluções.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center", padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon /> }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.h1}>O que te motivou a criar a Open Source SouJunior?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          Depois de 5 - 6 anos de carreira já com uma boa bagagem de conhecimentos, via que em alguns lugares que trabalhei tinham estagiários. Mas estas empresas, geralmente não contratavam juniores, e eu estava sempre envolvido com a complementação de estudos dos estagiários. Depois que fiz 8 anos de carreira fui para o trabalho remoto, onde trabalho há 4 anos, mas perdi o acesso aos juniores. A partir daí, comecei a fazer mentorias on-line, durante 3 meses. Quando as mentorias terminavam ou alguns encontravam colocação no mercado, pensei em reformular o processo para ajudar mais pessoas. Logo, priorizei o meu LinkedIn para ver qual era a demanda das pessoas na plataforma e levar benefícios às suas carreiras. Notei que a queixa principal na plataforma era a falta de experiência e pelo conhecimento que adquiri, percebi que para os juniores conseguirem uma experiência válida seria trabalhar com projetos Open Source, mesmo sem qualquer tipo de remuneração e serem reconhecidos pelo mercado. Com isso tive a ideia de criar a Open Source SouJunior,
           para que os juniores pudessem atuar e adquirir experiência.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center",  padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.h1}>O que você considera um diferencial da SouJunior em relação às outras comunidades de trabalho voluntário?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          O diferencial é que as pessoas migram para a SouJunior para ganhar experiência, criando projetos reais em grupo, em equipe e as outras comunidades são voltadas para cursos ou para tirar dúvidas. Na SouJunior, o júnior inicia interagindo com outras pessoas, aprendendo a trabalhar de fato em um projeto real, e assim adquirir experiência na prática. Temos tech recruiter e quando o júnior se inscrever para participar do projeto, passará por um onboarding. O júnior terá um mentor na área específica em que irá atuar, com estrutura de Scrum, Produto, Agilidade e Desenvolvimento. Tudo o que se assemelha e se aproxima de uma empresa de médio e grande porte".

          </Typography>
        </AccordionDetails>
      </Accordion > 
        <Accordion style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center",  padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.h1}>Qual o seu plano para estimular o interesse das pessoas em relação a SouJunior e impactar tanto os curiosos quanto os voluntários de forma que eles permaneçam continuamente engajados em relação a essa iniciativa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          A SouJunior está presente nas maiores Redes Sociais, mas na maioria delas percebemos que o conteúdo se perde no meio da diversidade de informações, como postagens, imagens e vídeos. Porém o LinkedIn foi uma grande surpresa, pois visualizamos um fluxo crescente e contínuo de pessoas querendo conhecer mais sobre a iniciativa. Então, além de manter essa rede atualizada de informações, lançamos o nosso Site para que as pessoas possam conhecer tanto o projeto, quanto o produto construído pelos nossos juniores, e isso gerou um impacto muito positivo dentro e fora da comunidade. Portanto, entendemos o quanto "o site é necessário para nós, porque se tornou um agregador de informações e um local onde as pessoas poderão ter o primeiro contato com o produto, reconhecerão o valor do projeto e se alinharão ao nosso propósito".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center",  padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.h1}>Você acredita que a SouJunior é o que você idealizou?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          Sim. Em relação a ideia do projeto eu sempre tive o propósito de entregar duas coisas: a primeira era promover a experiência prática para os juniores, que mesmo sendo difícil mensurar atualmente, sabemos que está acontecendo. A segunda era a ideia de estabelecer o trabalho em equipe, a colaboração e o esforço conjunto, gerando resultados impactantes para a jornada profissional dessas pessoas. Podemos ver isto acontecendo principalmente no desenvolvimento dos nossos produtos, o que foi comprovado após a primeira entrega do nosso Site.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center",  padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.h1}>Você acredita que a SouJunior te ajudou a evoluir profissionalmente?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          Com certeza eu evolui profissionalmente após a SouJunior. Na verdade, eu não tinha liderado equipes tão grandes, como as que a SouJunior tem hoje. As equipes que eu liderava anteriormente eram de 5 a 10 pessoas no máximo e agora a SouJunior tem 10 vezes mais voluntários. Então, com toda a certeza tem agregado bastante na minha carreira e também na questão de marketing pessoal, que me dá a oportunidade de conhecer outras pessoas e também outros projetos.
          </Typography>
        </AccordionDetails>
      </Accordion>  
      
      <Accordion style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center",  padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.h1}>Qual o maior desafio para você em ser o CEO da SouJunior?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          O maior desafio foi o recrutamento em alguns aspectos, por ser voluntariado. Outra questão é o desafio financeiro em colocar os projetos on-line, já que tudo se baseia em dólar, como hospedagem do site, seguidores e outras ferramentas que tem um custo alto. Desta forma e considerando um número grande de pessoas que temos no projeto, esse processo se torna bem mais complexo.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Accordion style={{backgroundColor:" #212121", color: "#FFF", borderBottom: "1px solid #FFF", alignItems:"center",  padding: "15px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.h1}>Você pretende futuramente transformar a SouJunior numa empresa jurídica?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.paragraphy}>
          Provavelmente não. Acredito que a SouJunior terá pequenos negócios para se sustentar, mas não a transformarei em uma empresa no formato total, com profissionais remunerados ou algo do tipo. Porém, se houvesse uma doação que comportasse isso, poderíamos pensar no assunto.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </section>
    
    <section className={styles.headers}>
      
        <h1>Essa é a equipe de heads que, junto com o Brandão, gerenciam os produtos do projeto!</h1>

        <section className={styles.perfil}>

      {headers.map(({id, nome, cargo, img, path, path2}) =>{
          return (
                       
            
              
              <div className={styles.headersContainers}>
                <img src={img}/>
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
                <ul>
                  <li>
                    <a href={path}
                       key={id}
                       target="_blank"
                       rel="noreferrer"
                    >
                      <AiFillLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={path2}
                      key={id}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaDiscord/>
                    </a>
                  </li>
                </ul>
              </div>
         
        

          )
          
      })}
        </section>

    </section>

    
    </>

)

}

  


