import React from 'react'

export const Submission = () => {
  return (
    <div className='px-36 flex flex-col py-10'>
      <h1 className='py-10 text-gray-500 text-2xl font-semibold'><span className='text-green-500'>S</span>ubmissions <span className='text-green-500'>I</span>nstructions</h1>
      <p className='text-left text-gray-500'>We invite original research papers that have not been previously published and are not currently under review for publication elsewhere. Submitted papers should be no longer than 6 pages (including references and appendices) in two-column IEEE template format.
        <br></br><br></br>All accepted papers will be published as part of The 21st IEEE International Conference on Pervasive Intelligence and Computing (PICom 2023). All previous The 21st IEEE International Conference on Pervasive Intelligence and Computing (PICom 2023) have been published by the IEEE and are available online through IEEE Digital Library (EI indexing)
        <br></br><br></br>A “Best Paper Award” Certificate will be conferred on the author(s) of a paper presented at the Special Session, selected by the Chairs based on the scientific significance, originality, and outstanding technical quality of the paper, as also assessed by the evaluations of the members of the Program Committee.
        <br></br><br></br>Best papers presented at the Special Session will be selected, and the corresponding authors will be invited to submit an extended version of their papers for possible publications in:
        <br></br><br></br>  
        <span className='text-green-500 px-10'>Special Issue on "Artificial Intelligence for Next-generation Edge Networks", SN Computer Science, (SCOPUS), Springer. <a className="px-10" href='https://www.springer.com/journal/42979'>https://www.springer.com/journal/42979</a></span>
      </p>
      <div>
        <a href='https://icnetlab.org/cyber-science2023/picom/index.html'><button className='text-white bg-blue-500 p-3 rounded-2xl'>Submission Link</button></a>
      </div>
    </div>
  )
}
