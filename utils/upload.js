import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
const storage= new GridFsStorage({
    url:"mongodb+srv://portfolioblog:codeforinterview@portfolioblog.ldizuar.mongodb.net/?retryWrites=true&w=majority",
    options:{useNewUrlParser:true,useUnifiedTopology:true},
    file:(request,file)=>{
      const match=["images/png","images/jpg"];
      if(match.indexOf(file.memeType)===-1){
          return `${Date.now()}-blog-${file.originalname}`
      }
      return{
          bucketName:'photos',
          filename: `${Date.now()}-blog-${file.originalname}`

      }
    }
})
export default multer({storage})