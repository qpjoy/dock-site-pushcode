import ArrowRight from "@/assets/img/arrow-right.svg";
import { download } from "@/utils";

function Download({ style }: any) {
  const _download = (e: any) => {
    e.preventDefault();
    download(
      "https://qp-diary-1320869019.cos.ap-shanghai.myqcloud.com/push-code/PushCode%E6%8E%A8%E6%B5%81%E5%8A%A9%E6%89%8B%20Setup%202.10.2.exe"
    );
  };

  return (
    <div className="download">
      <a
        className="use-download btn"
        style={{
          ...style,
        }}
        onClick={_download}
      >
        下载使用 <img src={ArrowRight} />
      </a>
    </div>
  );
}

export default Download;
