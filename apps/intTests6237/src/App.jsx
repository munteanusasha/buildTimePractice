
import './App.css'

function App() {

// ==========================================
//                filter
// ==========================================
  {
    const filter = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

    for (let item of filter) {
      if (item.length > 6) {
        console.log(item);
      }
    }
  }

// ==========================================
//                map
// ==========================================

  {
    const map = ['spray', 'limit'];
    for (let i = 0; i < map.length; i++) {
      const obj = {
        id: i,
        name: map[i],
      }
      console.log(obj);
    }
  }
// ==========================================
//                find
// ==========================================

  {
    const find = [
      {id: 0, name: 'spray'},
      {id: 1, name: 'limit'},
    ];
    const id = 1;

    for (let item of find) {
      if (item.id === id) {
        console.log(item);
      }
    }
  }

// ==========================================
//                concat
// ==========================================

  {
    const concat1 = ['spray', 'limit', 'elite'];
    const concat2 = ['exuberant', 'destruction', 'present'];

    const finalConcat = [...concat1, ...concat2];
    console.log(finalConcat);
  }

// ==========================================
//                pipe
// ==========================================

  const pipe = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];
  const pipeResult = [];

  for(let i = 0; i < pipe.length; i++){
    if(pipe[i].length > 6){
      const obj = {
        id: pipeResult.length,
        name: pipe[i],
      };
      pipeResult.push(obj);
    }
  }
  console.log(pipeResult);

// =======================================================
// =======================================================
// =======================================================
  return (
    <>
    </>
  )
}

export default App
