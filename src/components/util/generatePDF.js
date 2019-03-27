import React, { Fragment} from 'react'
import PDF, { Html, AddPage, Text } from 'jspdf-react'

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
	<Text x={5} y={5} size={19}>Hola</Text>
	<AddPage />
        <Html sourceById={idName} />
      </PDF>
      {contHtml}
    </Fragment>
  )
}
