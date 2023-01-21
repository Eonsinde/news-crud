import { DotLoader } from 'react-spinners'



type Props = {
    className?: string;
}

const PageTransitionLoader = ({ className } : Props) => {
    return (<>
        <section className={`${className ? className : "h-[400px]" } w-full flex items-center justify-center`}>
            {/* <ScaleLoader height={50} width={10} color='#3997c2' /> */}
            <DotLoader size={100} color='#9f1239' />
        </section>
    </>);
}
 
export default PageTransitionLoader;