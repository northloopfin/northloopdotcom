import React, { PureComponent } from 'react';
import { NewsHeaderCard } from 'react-ui-cards';

class BlogItem extends PureComponent {
  render() {
    const { data } = this.props;

    // var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; //Find where the src attribute starts
    // var srcStart = srcIndex + 5; //Find where the actual image URL starts; 5 for the length of 'src="'
    // var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; //Find where the URL ends
                
    // var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
                
    // output += `<img src="${src}" class="card-img-top" alt="Cover image">`; //Adding the image to the Card
                
    // output += `<div class="card-body">`;    //Defining the Card body
                
    // output += `<h5 class="card-title"><a href="${item.link}">${item.title}</a></h5>`;   //Hyperlinking the title of the card to the post
    // var yourString = item.description.replace(/<img[^>]*>/g,""); //We do not want an image in the description so I replace the images with "" (Empty text)
                
    // yourString = yourString.replace('h4', 'p'); //Replacing h4 tags with p tags
                
    // yourString = yourString.replace('h3', 'p'); //Replacing h3 tags with p tags
                
    // var maxLength = 120; // maximum number of characters to extract
                
    // //trim the string to the maximum length
    // var trimmedString = yourString.substr(0, maxLength);
    // //re-trim if we are in the middle of a word
    // trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));            


    return data && data.thumbnail ? (
    	<NewsHeaderCard style={{marginBottom: '5%'}}
          href={data.link}
          thumbnail={data.thumbnail}
          title={data.title}
          author={data.author}
          date={data.pubDate}
          tags={data.categories}/>)
    	: <p>No posts</p>;
  }
}

export default BlogItem;