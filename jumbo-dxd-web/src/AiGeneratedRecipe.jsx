import React, { useRef, useState } from 'react';

const AiGeneratedRecipe = () => {
  const [image_url, setImage_url] = useState('/');
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === '') {
      return 0;
    }
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        
          Authorization:
            'Bearer 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',
          'User-Agent': 'Chrome',
        },
        body: JSON.stringify({
            
          prompt: `${inputRef.current.value}`,
          n: 1,
          model: 'dall-e-3',
          size: "1024x1024"
          ,
        }),
      }
    );
    let data = await response.json();
    let data_array = data.data;
    setImage_url(data_array[0].url);
    console.log(data);
  };

  return (
    <div className='ai-image-generator'>
      <div className='header'>
        Ai Recipe <span>Generator</span>
      </div>
      <div className='search-box'>
        <div className='image'>
          <img src={image_url} alt='Generated Image' />
        </div>
        <input
          type='text'
          ref={inputRef}
          className='search-input'
          placeholder='Search for a recipe'
        />
        <button className='generate-btn' onClick={() => imageGenerator()}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default AiGeneratedRecipe;
