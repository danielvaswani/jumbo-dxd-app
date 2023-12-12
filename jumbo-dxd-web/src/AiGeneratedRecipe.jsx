import React, { useRef, useState } from 'react';

const AiGeneratedRecipe = () => {
  const [image_url, setImage_url] = useState('/');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const generateContent = async () => {
    try {
      const imageResponse = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer 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',
            'User-Agent': 'Chrome',
          },
          body: JSON.stringify({
            prompt: `${inputValue}`,
            n: 1,
            model: 'dall-e-3',
            size: '1024x1024',
          }),
        }
      );
      const imageData = await imageResponse.json();
      const imageUrl = imageData.data[0].url;
      setImage_url(imageUrl);

      const descriptionResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: `Give ingredients and description of ${inputValue} and keep it consistent and list the ingredients seperstely and description in steps below` },
          ],
        }),
      });

      if (!descriptionResponse.ok) {
        const errorData = await descriptionResponse.json();
        console.error('Error Data:', errorData);
        throw new Error('Network response was not ok.');
      }

      const descriptionData = await descriptionResponse.json();
      setGeneratedDescription(descriptionData.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    generateContent();
  };

  
  console.log(generatedDescription);

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
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className='generate-btn' onClick={handleFormSubmit}>
          Generate
        </button>
      </div>
      <div>
        <h3>Generated Description:</h3>
        <p>{generatedDescription}</p>
      </div>
    </div>
  );
};

export default AiGeneratedRecipe;
