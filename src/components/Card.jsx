import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank">
          <div key={props.idx} className="flex  gap-1 flex-col items-center">
            <div className="h-50 w-50 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={props.elem.download_url}
                alt=""
              />
            </div>
            <h1 className="font-bold text-lg">{props.elem.author}</h1>
          </div>
        </a>
    </div>
  )
}

export default Card