export const generateContent = async (inputValue) => {
    try {
      const imageResponse = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: import.meta.env.VITE_OPENAI_API_KEY,
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
      const imageUrl = imageData.data[0].url ?? "https://cdn-icons-png.flaticon.com/512/4080/4080032.png";
    //   setImage_url(imageUrl);

      const descriptionResponse = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              import.meta.env.VITE_OPENAI_API_KEY,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: `Give ingredients and description of ${inputValue} and keep it consistent and list the ingredients seperstely and description in steps below`,
              },
            ],
          }),
        }
      );

      if (!descriptionResponse.ok) {
        const errorData = await descriptionResponse.json();
        console.error('Error Data:', errorData);
        throw new Error('Network response was not ok.');
      }

      const descriptionData = await descriptionResponse.json() ?? { role: "system", message: { content: "No description found" } };
    //   setGeneratedDescription(descriptionData.choices[0].message.content);
    
    console.log({
        imageUrl,
        descriptionData
    
    })
    return {
        imageUrl,
        description : descriptionData.choices[0].message.content
    }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };