// mutation create{
//     createNIKE(input: {
//       title:"test"
//       inquiry:"test"
//     }) {
//         title
//           inquiry
//     }
//   }
  
export const queryCstudent=`
query list{
  listNIKES{
    items{
      id
      title
      inquiry
    }
    }
  }
`;
export const createStudent= `mutation createNIKE($input: CreateNIKEInput!) {
  createNIKE(input: $input) {
    title,
    inquiry
  }
}
`;