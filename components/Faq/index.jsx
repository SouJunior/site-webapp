import React from "react";

const souJunior = [
  {
    id:'Sou Junior',
    titulo: 'Qual o objetivo da SouJunior?',
    descricao:
      'A SouJunior tem como objetivo apoiar e preparar profissionais juniores para o mercado de tecnologia, através do voluntariado.',
  },

  {
    id:'Sou Junior',
    titulo: 'Como fazer parte da Comunidade da SouJunior?',
    descricao:
      'Para você se conectar com a Comunidade da SouJunior, acesse o servidor SouJunior no Discord e no Github.Ao entrar no servidor SouJunior no Discord, leia as regras e fique sempre atento ao #chat para interagir com os demais participantes da Comunidade.Para fazer parte da Comunidade da SouJunior, selecione no Menu da Home do Site SouJunior a opção “Participar”, em seguida escolha a seção “Comunidade” e clique em “Quero Participar”. Você será direcionado para o formulário de candidatura que, após enviado, nossa equipe responsável entrará em contato com você.',
  },

  {
    id:'Sou Junior',
    titulo: 'A SouJunior oferece alguma ajuda de custo para quem é voluntário?',
    descricao:
      'Não. Todos os voluntários da SouJunior atuam em regime home office.',
  },

  {
    id:'Sou Junior',
    titulo:
      'Qual auxílio a Sou Junior oferece ao junior em relação ao mercado de trabalho?',
    descricao:
      'Teremos, em breve, o nosso “Portal de vagas” onde divulgaremos as oportunidades e facilitaremos o contato dos juniores com as empresas através da divulgação do contato.',
  },
];

const mentor = [
  {
    titulo: 'Como me tornar um mentor na SouJunior?',
    descricao: 'O mentor na SouJunior é aquele que apoia os juniores na execução das suas atividades, sendo no esclarecimento das dúvidas ou orientando sobre a área de atuação. Para ser um mentor, pedimos que o voluntário tenha no mínimo 6 meses de experiência na função e vontade de ensinar. Portanto, se você acredita que pode contribuir nesse papel, selecione no Menu da Home do Site SouJunior a opção “Participar”, em seguida escolha a seção “Sou Mentor” e clique em “Quero Participar”. Você será direcionado para o formulário de candidatura que, após enviado, passará por nossa seleção interna e você será comunicado no momento que uma oportunidade com o seu perfil ficar disponível.',
  },

  {
    titulo: 'Como ser um Apoiador ou Parceiro na SouJunior?',
    descricao: 'O Apoiador ou Parceiro na SouJunior, poderá incrementar o seu portfólio ou envolver-se com alguma ação dentro da SouJunior. Portanto, se você acredita que pode contribuir como Apoiador ou Parceiro na SouJunior, selecione no Menu da Home do Site SouJunior a opção “Participar”, em seguida escolha a seção “Sou Apoiador” e clique em “Quero Participar”. Você será direcionado para o formulário de candidatura que após enviado, nossa equipe responsável entrará em contato com você.',
  },

    
]

const voluntario = [
  {
    titulo: 'Como ser voluntário na SouJunior?',
    descricao:
      'O voluntário participa ativamente nas atividades agregando conhecimentos, executando projetos, e colocando a “mão na massa”.Para tornar-se um voluntário na SouJunior, selecione no Menu da Home do Site SouJunior a opção “Participar”, em seguida escolha a seção “Sou Júnior” e clique em “Quero Participar”. Você será direcionado para o formulário de candidatura que, após enviado, passará por nossa seleção interna e você será comunicado no momento que uma oportunidade com o seu perfil ficar disponível.',
  },

  {
    titulo: 'Quantas horas semanalmente preciso me dedicar à iniciativa?',
    descricao:
      'Na SouJunior a prioridade é manter as atividades de forma assíncrona, para que os voluntários possam gerenciar seu tempo. Cada time tem suas metas de entregas e alguns encontros síncronos pontuais. Desta forma, quando estiver no processo seletivo, procure conversar com o Head da área e pergunte qual é o tempo médio necessário de trabalho dentro do seu time e veja se existe alguma forma de flexibilização caso não se adeque ao seu tempo disponível.',
  },

  {
    titulo:
      'Após fazer o meu cadastro na SouJunior, qual o próximo passo a seguir?',
    descricao:
      'Após preenchido e enviado o formulário de candidatura, nossa equipe de tech recruiters ou business entrará em contato através do e-mail cadastrado.',
  },

  {
    titulo:
      'Posso trabalhar em outra empresa enquanto sou voluntário na SouJunior?',
    descricao:
      'Sim, o voluntariado na SouJunior não impede que você esteja empregado ou trabalhando como voluntário em outra iniciativa.',
  },

  {
    titulo:
      'Os voluntários da SouJunior precisam se deslocar até a sede da empresa?',
    descricao: 'Não. Todos os setores da SouJunior atuam de forma home office.',
  },
];



export const Faq= () => {
  return(
  <section>
   
    <div>
      {souJunior.map((nome) => (
        <>
        <h2>{nome.titulo}</h2>
        <p>{nome.descricao}</p>
        </>
      ))}

    </div>

    <div>
      {mentor.map((item) => (
        <>
        <h1>{item.titulo}</h1>
        <p>{item.descricao}</p>
        </>
      ))}

    </div>

    <div>
      {voluntario.map((nome2) => (
        <>
          <h2>{nome2.titulo}</h2> 
        <p>{nome2.descricao}</p>
        </>

      ))}
    </div>

  



    </section>
    
    
  
    
    
    )

}