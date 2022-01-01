const vaxTrail = (arr) => {
   let A = [];
   let B = [];
   let C = [];
   let D = [];
   for (let a of arr) {
      if (a.age >= 20 && a.age <= 30 && a.temperature < 100) {
         A.push(a)
      }
      else if (a.age >= 31 && a.age <= 40 && a.temperature < 100) {
         B.push(a)
      }
      else if (a.age >= 41 && a.age <= 50 && a.temperature < 100) {
         C.push(a)
      }
      else {
         D.push(a)
      }
   }

   for (let a = 0; a < A.length; a++) {
      for (let b = a + 1; b < A.length; b++) {
         if (A[a].age % 2 !== 0 && A[b].age % 2 === 0) {
            let temp = A[b];
            A[b] = A[a];
            A[a] = temp;
         }
      }
   }
   for (let a = 0; a < B.length; a++) {
      for (let b = a + 1; b < B.length; b++) {
         if (B[a].age % 2 !== 0 && B[b].age % 2 === 0) {
            let temp = B[b];
            B[b] = B[a];
            B[a] = temp;
         }
      }
   }
   for (let a = 0; a < C.length; a++) {
      for (let b = a + 1; b < C.length; b++) {
         if (C[a].age % 2 !== 0 && C[b].age % 2 === 0) {
            let temp = C[b];
            C[b] = B[a];
            C[a] = temp;
         }
      }
   }
   for (let a = 0; a < D.length; a++) {
      for (let b = a + 1; b < D.length; b++) {
         if (D[a].age % 2 !== 0 && D[b].age % 2 === 0) {
            let temp = D[b];
            D[b] = D[a];
            D[a] = temp;
         }
      }
   }
   return {
      A, B, C, D
   }
}
