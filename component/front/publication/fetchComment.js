import React from 'react'
import InsidePostComment from './InsidePostComment';
import { Showcomment } from '../../lib/helper';


export default function fetchComment({commentKey}) {
  const { isLoading, isError, data, error } = useQuery([],Showcomment(commentKey));
  
  if (isLoading) return <div>Chargement.....</div>;
  if (isError) return <div>Erreur {error}</div>;


  return (
    <div>
    {
      data.map((data) => {
      return <InsidePostComment comment={data.text_com} author={data.nom_user} time={data.date_com}>  </InsidePostComment>;
    })
    }
    </div>
    
  
  );
}
