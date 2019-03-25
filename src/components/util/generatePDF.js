import React, { Fragment} from 'react'
import PDF, { Html } from 'jspdf-react'

export const generatePDF = (title, idName, contHtml) => {
  const properties = { title };
  return(
    <Fragment>
      <PDF
      properties={properties}
      preview={true}
      previewWidth={window.innerWidth}
      previewHeight={window.innerHeight}
      DisplayDocTitle={true}
      language={'es-ve'}>
        <Html sourceById={idName} />
      </PDF>
      {contHtml}
    </Fragment>
  )
}
