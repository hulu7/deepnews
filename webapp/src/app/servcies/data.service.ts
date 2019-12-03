import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  getHeadlines(){
    let data = {
      articles: [
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        },
        {
          urlToImage: 'https://images.tmtpost.com/uploads/watermark/1400/5d23bf2e05bf98c0a2842c49071577720189e81f_1400_896.png?imageMogr2/strip/interlace/1/quality/85/format/jpg&ext=.png',
          source: {
            name: '钛极客',
          },
          title: '成为一家靠谱的汽车科技公司有多难？',
          description: '诞生于互联网精神下的造车新势力们，效率够快、数字化程度够高，具备“科技公司”的本质，在市场竞争中能够“轻装上阵”；然而，随着传统汽车巨头转型开始落地结果，新旧势力已进入直面较量。',
          url: 'https://www.tmtpost.com/4199585.html'
        }
      ]
    };
    return of(data);
  }
  byCategory(category){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category='+ category +'&apiKey='+environment.apiKey);
    
  }
}
