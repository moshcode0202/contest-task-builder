'use client';

import { TaskPlatformList } from '../TaskPlatformList/TaskPlatformList';
import TaskPlatformCard from '../TaskPlatformCard/TaskPlatformCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import ShowTaskToDoCard from '../ShowTaskToDoCard/ShowTaskToDoCard';
import { ReactSortable } from 'react-sortablejs';
import { updateTaskToList } from '@/app/store/taskEditerSlice';

const HomePage = () => {
    const taskToDo: any = useSelector((state: RootState) => state.taskToDo);
    const dispatch = useDispatch();

    console.log(taskToDo, 'taskToDo');

    return (
        <div data-fetch-key="airdropBuilder:0">
            <div>
                <div
                    className="overflow-x-hidden fixed inset-0 w-full h-full bg-white/90 backdrop-blur-[30px] z-50 bg-[#fafafd] overflow-y-auto"
                    style={{ backdropFilter: 'blur(30px)', display: 'none' }}
                >
                    <div className="text-center absolute inset-0 w-full h-full bg-[#fafafd] modal-popup-container before:inline-block before:h-full before:align-middle px-0">
                        <div className="align-middle inline-block text-left w-full">
                            <div className="my-0  p-0" style={{ width: '100%px' }}>
                                <div>
                                    <div className="absolute top-0 w-full h-screen bg-[#fafafd] flex flex-col items-center justify-center">
                                        <div className="max-w-[360px] w-full mx-auto px-[30px] pt-10 pb-[34px] bg-white rounded-[10px]">
                                            <form>
                                                <section>
                                                    <div className="text-[#313943] text-center mb-6">
                                                        <svg
                                                            width="116px"
                                                            height="22px"
                                                            viewBox="0 0 751 139"
                                                            version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            className="w-[97px] mx-auto mb-[18px]"
                                                        >
                                                            <g
                                                                id="LOGOS"
                                                                stroke="none"
                                                                strokeWidth={1}
                                                                fill="none"
                                                                fillRule="evenodd"
                                                            >
                                                                <g
                                                                    id="00_LOGO_05"
                                                                    transform="translate(-956.000000, -479.000000)"
                                                                >
                                                                    <g
                                                                        id="Group-7-Copy-2"
                                                                        transform="translate(956.000000, 479.000000)"
                                                                    >
                                                                        <path
                                                                            d="M241.315269,34.8088849 C247.95371,34.8088849 253.438917,36.0737795 257.832365,38.1940496 C259.39096,38.9462246 260.704191,39.7572406 261.781462,40.5750118 C262.449277,41.0819598 262.901039,41.4920295 263.147005,41.7537149 L263.864788,42.5173714 L263.394587,43.4540117 C263.186778,43.8679686 262.787233,44.543271 262.182774,45.3932127 C261.189993,46.7891801 259.96686,48.1814558 258.498774,49.4812022 C257.285805,50.5550845 255.954291,51.519585 254.500484,52.3470095 L253.389537,52.979297 L252.589054,51.9826948 C252.414651,51.7991448 252.284027,51.6756907 252.123544,51.5386843 C251.640218,51.1260616 251.023283,50.7051932 250.262362,50.3063103 C248.015928,49.1287057 245.066463,48.4122011 241.315269,48.4122011 C234.961074,48.4122011 231.892858,50.9686163 231.892858,55.4499363 C231.892858,61.9204753 234.100397,63.233518 244.313493,64.2542641 C244.727232,64.2956152 245.152228,64.3373391 246.022369,64.4225305 C257.975607,65.5800029 266.595709,73.4154286 266.595709,85.4697146 C266.595709,101.86213 257.931041,108.589463 238.550102,108.589463 C231.40434,108.589463 225.71158,107.158465 221.340039,104.754663 C219.783044,103.89851 218.501161,102.974083 217.475711,102.040781 C216.837196,101.459644 216.41542,100.987363 216.190119,100.682409 L215.642688,99.9414396 L216.056009,99.118104 C216.236268,98.7590273 216.574193,98.170024 217.071761,97.4266576 C217.891971,96.2012623 218.874841,94.977589 220.024929,93.8321013 C221.515722,92.3472702 223.179999,91.1040544 225.023402,90.1860394 L226.048606,89.6754878 L226.811202,90.5299772 C226.905221,90.6353256 227.131363,90.8583509 227.486841,91.1606283 C228.102262,91.6839458 228.842547,92.2116529 229.704859,92.7063579 C232.18707,94.1303933 235.13457,94.9861471 238.550102,94.9861471 C248.158871,94.9861471 251.567231,92.4792711 251.567231,86.8467687 C251.567231,79.8630814 248.742439,78.2407253 237.638917,76.9739058 C237.312962,76.936717 236.121914,76.8021329 236.165623,76.8070857 C235.561507,76.7386315 235.098622,76.6854086 234.63734,76.630996 C224.257097,75.3778169 216.86438,67.5865766 216.86438,56.8269903 C216.86438,41.0157041 224.383113,34.8088849 241.315269,34.8088849 Z M312.922383,107.35418 L311.705305,107.596622 C309.723768,107.991345 307.494825,108.176347 305.328894,108.176347 C303.632895,108.176347 302.006136,108.069223 300.502817,107.89044 C299.593522,107.782302 298.920106,107.672796 298.537708,107.596622 L297.330751,107.356196 L297.330751,1.3574202 L298.517659,1.10409988 C300.378245,0.706997621 302.590846,0.520238966 304.775861,0.520238966 C306.470548,0.520238966 308.121354,0.627179045 309.666001,0.805552279 C310.208153,0.868159045 310.699402,0.935414551 311.131818,1.00297335 C311.396185,1.04427682 311.585522,1.07717548 311.691847,1.09734678 L312.917742,1.32991675 L312.648811,62.4011026 L337.724022,35.0725223 L338.399319,35.0845329 C341.869263,35.1462484 345.115897,35.7305335 348.060249,36.6670869 C349.948011,37.2675553 351.321788,37.8756545 352.092234,38.2997246 L353.805935,39.2429822 L325.449912,68.7439296 L355.032293,104.462161 L353.509782,105.354174 C352.765386,105.790303 351.406559,106.408935 349.476968,107.016515 C346.679723,107.897299 343.490489,108.468873 339.944102,108.588609 L339.194916,108.613904 L312.662505,75.6464463 L312.922383,107.35418 Z M418.721599,36.4552681 L419.928556,36.2148421 C421.910093,35.8201197 424.139036,35.6351173 426.304967,35.6351173 C428.000966,35.6351173 429.627725,35.7422415 431.131044,35.9210244 C432.040339,36.0291626 432.713755,36.1386684 433.096153,36.2148421 L434.30311,36.4552681 L434.30311,106.125525 C434.30311,128.829613 425.170847,138.609242 405.151436,138.609242 C397.853797,138.609242 391.829308,136.852369 387.018168,133.913942 C385.319365,132.876389 383.892138,131.760463 382.724962,130.638239 C382.007898,129.948793 381.527665,129.396427 381.272124,129.051765 L380.709454,128.292864 L381.150844,127.457577 C381.35602,127.0693 381.741274,126.428506 382.306941,125.618394 C383.240219,124.281813 384.35357,122.947053 385.649761,121.698212 C386.941988,120.453189 388.349565,119.360759 389.874595,118.464979 L390.965382,117.824267 L391.780958,118.791307 C391.810386,118.826199 391.882986,118.908184 391.997197,119.0305 C392.196706,119.244168 392.434859,119.484886 392.710033,119.745909 C393.503953,120.498999 394.427874,121.254521 395.467903,121.959194 C398.41312,123.95473 401.671853,125.143631 405.151436,125.143631 C414.68812,125.143631 418.399679,120.572943 418.701366,106.920498 C418.068715,107.058552 417.40287,107.194615 416.714235,107.32423 C415.120137,107.624272 413.559988,107.86029 412.087176,108.007989 C410.990628,108.117955 409.965335,108.176347 409.022671,108.176347 C386.652384,108.176347 380.147514,100.468745 380.147514,77.0696849 L380.147514,36.4722986 L381.334422,36.2189783 C383.195008,35.821876 385.407609,35.6351173 387.592624,35.6351173 C389.287311,35.6351173 390.938117,35.7420574 392.482764,35.9204307 C393.024916,35.9830374 393.516165,36.0502929 393.948581,36.1178517 C394.212948,36.1591552 394.402285,36.1920538 394.50861,36.2122252 L395.729025,36.4437555 L395.729025,78.446739 C395.729025,91.2580242 397.806125,94.0222092 409.022671,94.0222092 C409.888993,94.0222092 410.84484,93.9995272 411.874878,93.9564872 C413.28088,93.8977375 414.781909,93.8031232 416.319498,93.6825374 C417.162132,93.6164537 417.970033,93.5461771 418.721599,93.4754497 L418.721599,36.4552681 Z M483.937865,49.3576467 L483.937865,107.356196 L482.730907,107.596622 C480.74937,107.991345 478.520428,108.176347 476.354496,108.176347 C474.658497,108.176347 473.031738,108.069223 471.528419,107.89044 C470.619125,107.782302 469.945708,107.672796 469.56331,107.596622 L468.356353,107.356196 L468.356353,37.1721044 L469.529893,36.9104223 C469.610519,36.8924439 469.760122,36.8603922 469.97521,36.8162865 C470.328746,36.7437909 470.740746,36.6632891 471.207724,36.5768016 C472.536517,36.3307003 474.043093,36.084977 475.699614,35.8558248 C480.429904,35.2014676 485.422587,34.8088849 490.45685,34.8088849 C494.829138,34.8088849 499.141375,35.128347 503.145742,35.7930722 L504.135037,35.9572953 L504.361393,36.934248 C504.7709,38.7016802 504.953137,40.5530646 504.953137,42.5056281 C504.953137,43.9638206 504.844361,45.3857883 504.66291,46.7186382 C504.553203,47.5244935 504.441975,48.1291845 504.364107,48.4781903 L504.058794,49.8466045 L502.672909,49.6342442 C499.578284,49.1600522 496.182363,48.9630227 492.392467,48.9630227 C489.893044,48.9630227 487.520748,49.0646489 485.354417,49.2338776 C484.844589,49.2737042 484.371404,49.3153979 483.937865,49.3576467 Z M584.036924,84.0926606 C584.036924,103.256382 576.73703,109.002579 556.820867,109.002579 C536.966384,109.002579 529.743069,103.299682 529.743069,84.230366 L529.743069,36.0421519 L530.950026,35.8017259 C532.931564,35.4070034 535.160506,35.2220011 537.326437,35.2220011 C539.022436,35.2220011 540.649196,35.3291253 542.152515,35.5079082 C543.061809,35.6160464 543.735225,35.7255522 544.117623,35.8017259 L545.324581,36.0421519 L545.324581,86.8467687 C545.324581,93.8288661 547.391544,95.1238525 556.820867,95.1238525 C566.382931,95.1238525 568.455412,93.8357962 568.455412,86.8467687 L568.455412,36.0591824 L569.642321,35.805862 C571.502906,35.4087598 573.715507,35.2220011 575.900522,35.2220011 C577.59521,35.2220011 579.246016,35.3289412 580.790663,35.5073144 C581.332815,35.5699212 581.824063,35.6371767 582.25648,35.7047355 C582.520847,35.746039 582.710184,35.7789376 582.816509,35.7991089 L584.036924,36.0306393 L584.036924,84.0926606 Z M638.255046,34.8088849 C644.893488,34.8088849 650.378694,36.0737795 654.772142,38.1940496 C656.330737,38.9462246 657.643968,39.7572406 658.721239,40.5750118 C659.389054,41.0819598 659.840816,41.4920295 660.086782,41.7537149 L660.804565,42.5173714 L660.334364,43.4540117 C660.126555,43.8679686 659.727011,44.543271 659.122551,45.3932127 C658.12977,46.7891801 656.906637,48.1814558 655.438551,49.4812022 C654.225582,50.5550845 652.894068,51.519585 651.440261,52.3470095 L650.329315,52.979297 L649.528831,51.9826948 C649.354428,51.7991448 649.223804,51.6756907 649.063321,51.5386843 C648.579995,51.1260616 647.96306,50.7051932 647.202139,50.3063103 C644.955706,49.1287057 642.00624,48.4122011 638.255046,48.4122011 C631.900851,48.4122011 628.832635,50.9686163 628.832635,55.4499363 C628.832635,61.9204753 631.040175,63.233518 641.25327,64.2542641 C641.66701,64.2956152 642.092005,64.3373391 642.962147,64.4225305 C654.915384,65.5800029 663.535486,73.4154286 663.535486,85.4697146 C663.535486,101.86213 654.870818,108.589463 635.489879,108.589463 C628.344118,108.589463 622.651357,107.158465 618.279816,104.754663 C616.722821,103.89851 615.440938,102.974083 614.415488,102.040781 C613.776973,101.459644 613.355197,100.987363 613.129896,100.682409 L612.582465,99.9414396 L612.995786,99.118104 C613.176046,98.7590273 613.51397,98.170024 614.011538,97.4266576 C614.831749,96.2012623 615.814618,94.977589 616.964706,93.8321013 C618.455499,92.3472702 620.119777,91.1040544 621.963179,90.1860394 L622.988383,89.6754878 L623.750979,90.5299772 C623.844998,90.6353256 624.07114,90.8583509 624.426619,91.1606283 C625.04204,91.6839458 625.782325,92.2116529 626.644636,92.7063579 C629.126848,94.1303933 632.074347,94.9861471 635.489879,94.9861471 C645.098648,94.9861471 648.507008,92.4792711 648.507008,86.8467687 C648.507008,79.8630814 645.682216,78.2407253 634.578695,76.9739058 C634.252739,76.936717 633.061691,76.8021329 633.1054,76.8070857 C632.501284,76.7386315 632.038399,76.6854086 631.577118,76.630996 C621.196875,75.3778169 613.804157,67.5865766 613.804157,56.8269903 C613.804157,41.0157041 621.322891,34.8088849 638.255046,34.8088849 Z M710.543331,107.356196 L709.336374,107.596622 C707.354837,107.991345 705.125894,108.176347 702.959963,108.176347 C701.263964,108.176347 699.637205,108.069223 698.133886,107.89044 C697.224591,107.782302 696.551175,107.672796 696.168777,107.596622 L694.96182,107.356196 L694.96182,1.3574202 L696.148728,1.10409988 C698.009314,0.706997621 700.221915,0.520238966 702.40693,0.520238966
C704.101617,0.520238966 705.752424,0.627179045 707.29707,0.805552279 C707.839222,0.868159045 708.330471,0.935414551 708.762888,1.00297335 C709.027254,1.04427682 709.216592,1.07717548 709.322916,1.09734678 L710.543331,1.32887711 L710.543331,36.1686327 C711.438833,36.0153839 712.383785,35.8634346 713.351606,35.7201446 C714.571397,35.5395495 715.75603,35.3835062 716.879954,35.2592889 C718.707235,35.0573358 720.306967,34.9465903 721.624843,34.9465903 C742.985302,34.9465903 750.5,43.7920778 750.5,66.7417795 L750.5,107.356196 L749.293043,107.596622 C748.910645,107.672796 748.237228,107.782302 747.327934,107.89044 C745.824615,108.069223 744.197856,108.176347 742.501857,108.176347 C740.394586,108.176347 738.267944,107.996844 736.143124,107.600034 L734.918488,107.371333 L734.918488,65.3647254 C734.918488,53.0937407 731.858329,49.1007281 721.624843,49.1007281 C720.444667,49.1007281 719.003985,49.1781364 717.364183,49.3213104 C716.202795,49.4227131 714.971006,49.5544857 713.701039,49.7093699 C712.60152,49.8434665 711.535123,49.9872136 710.543908,50.1309104 C710.54378,50.130929 710.543588,69.2060243 710.543331,107.356196 Z"
                                                                            id="skyrush-copy"
                                                                            fill="currentColor"
                                                                            fillRule="nonzero"
                                                                        />
                                                                        <g id="Group-4" fill="currentColor">
                                                                            <path
                                                                                d="M15.0316651,138.592339 C14.7937832,138.604146 14.554366,138.610119 14.3135537,138.610119 C6.44349603,138.610119 0.0635537172,132.230177 0.0635537172,124.360119 C0.0635537172,124.355772 0.0635556635,124.351426 0.0635595555,124.34708 L2.84217094e-14,124.286589 L0,71 L67.6893787,138.610119 L15.0503473,138.610119 L15.0316651,138.592339 Z M124.531889,0.517779978 C124.769771,0.505973355 125.009188,0.5 125.25,0.5 C133.120058,0.5 139.5,6.87994232 139.5,14.75 C139.5,14.7543469 139.499998,14.7586934 139.499994,14.7630394 L139.563554,14.8235296 L139.563554,68.1101191 L71.8741751,0.5 L124.513206,0.5 L124.531889,0.517779978 Z M44.7695526,8 L130.672619,93.9030663 C140.82625,104.056698 140.82625,120.518987 130.672619,130.672619 C120.518987,140.82625 104.056698,140.82625 93.9030663,130.672619 L8,44.7695526 C-2.15363159,34.615921 -2.15363159,18.1536316 8,8 C18.1536316,-2.15363159 34.615921,-2.15363159 44.7695526,8 Z"
                                                                                id="Combined-Shape"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <h1 className="hidden" />
                                                        <p className="max-w-[206px] font-medium text-xs leading-[21px] text-[#313943] text-center mx-auto">
                                                            We'll sign you in or create an account if you don't have one
                                                            yet.
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center mb-[21px] gap-2">
                                                        <div className="w-[147px] h-[43px] bg-[#fff9f2] border border-[#ffecd7] rounded-[10px] flex justify-center items-center cursor-pointer">
                                                            <img
                                                                src="/images/metamask.svg"
                                                                alt="metamask"
                                                                className="w-5"
                                                            />
                                                            <p className="text-sm font-semibold text-[#f89c35] ml-[14px]">
                                                                Metamask
                                                            </p>
                                                        </div>
                                                        <div
                                                            aria-label=""
                                                            data-microtip-position="top"
                                                            role="tooltip"
                                                            className="w-[43px] h-[43px] bg-[#fafafd] border border-[#e5e9eb] rounded-[10px] flex justify-center cursor-pointer"
                                                        >
                                                            <img
                                                                src="/images/coin-1.svg"
                                                                alt="coin-1"
                                                                className="w-5"
                                                            />
                                                            <div className="custom-tooltip underwork-tooltip">
                                                                <p>This feature is going live soon 🤓</p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            aria-label=""
                                                            data-microtip-position="top"
                                                            role="tooltip"
                                                            className="w-[43px] h-[43px] bg-[#fafafd] border border-[#e5e9eb] rounded-[10px] flex justify-center cursor-pointer"
                                                        >
                                                            <img
                                                                src="/images/coin-2.svg"
                                                                alt="coin-2"
                                                                className="w-[15px]"
                                                            />
                                                            <div className="custom-tooltip underwork-tooltip">
                                                                <p>This feature is going live soon 🤓</p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            aria-label=""
                                                            data-microtip-position="top"
                                                            role="tooltip"
                                                            className="w-[43px] h-[43px] bg-[#fafafd] border border-[#e5e9eb] rounded-[10px] flex justify-center cursor-pointer"
                                                        >
                                                            <img
                                                                src="/images/coin-3.svg"
                                                                alt="coin-3"
                                                                className="w-[18px]"
                                                            />
                                                            <div className="custom-tooltip underwork-tooltip">
                                                                <p>This feature is going live soon 🤓</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full text-center border-b border-[#e0e0ec] leading-[0.25] mb-5">
                                                        <span className="bg-white px-[10px] text-[11px] font-medium text-[#313943]">
                                                            or
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        placeholder="your email"
                                                        defaultValue=""
                                                        className="form-input border rounded-[10px] text-[15px] text-[#2f3944] leading-[21px] px-7 pt-[15px] pb-[14px] mb-5 placeholder:italic placeholder:text-[#2f3944]"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="flex align-center justify-center bg-[#0ee29f] rounded-[10px] pt-[15px] pb-[13px] w-full text-sm leading-6 font-black text-white text-center uppercase disabled:bg-[#baffe9] mb-5"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            className="h-5 w-5 animate-spin mr-1"
                                                            style={{ display: 'none' }}
                                                        >
                                                            <circle
                                                                cx={12}
                                                                cy={12}
                                                                r={10}
                                                                stroke="currentColor"
                                                                strokeWidth={4}
                                                                className="opacity-25"
                                                            />
                                                            <path
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                className="opacity-75"
                                                            />
                                                        </svg>
                                                        Continue
                                                    </button>
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="w-full text-center text-xs font-medium text-[#313943]"
                                                        >
                                                            Select Gmail, Twitter or Facebook
                                                        </button>
                                                    </div>
                                                </section>
                                            </form>
                                        </div>
                                        <div className="max-w-[360px] w-full text-center mt-[30px]">
                                            <button className="back-btn bg-white border-0 uppercase">
                                                <svg
                                                    width="10px"
                                                    height="6px"
                                                    viewBox="0 0 10 6"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    className="rotate-90 mr-[18px]"
                                                >
                                                    <g
                                                        id="BUILDER-FLOW"
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g
                                                            id="36_FINALIZEGIVEAWAY_02"
                                                            transform="translate(-231.000000, -202.000000)"
                                                            fill="currentColor"
                                                            fillRule="nonzero"
                                                        >
                                                            <g
                                                                id="Group-11"
                                                                transform="translate(40.000000, 115.000000)"
                                                            >
                                                                <g id="LEFT" transform="translate(0.000000, 78.000000)">
                                                                    <g
                                                                        id="Group-7"
                                                                        transform="translate(40.345157, 0.600000)"
                                                                    >
                                                                        <g
                                                                            id="Group-14"
                                                                            transform="translate(32.654843, 0.000000)"
                                                                        >
                                                                            <polygon
                                                                                id="Path-2-Copy-3"
                                                                                transform="translate(123.338576, 11.390424) rotate(90.000000) translate(-123.338576, -11.390424) "
                                                                                points="121.441076 6.67492418 126.386076 11.3909242 121.441076 16.1059242 120.291076 14.8569242 123.926558 11.3909242 120.291076 7.92392418"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="overflow-x-hidden overflow-y-auto fixed inset-0 w-full h-full bg-[#fafafd] z-50"
                                        style={{ display: 'none' }}
                                    >
                                        <div className="text-center absolute inset-0 w-full h-full modal-popup-container before:inline-block before:h-full before:align-middle px-3">
                                            <div className="align-middle inline-block text-left w-full">
                                                <div
                                                    className="text-gray text-sm max-w-full relative mx-auto rounded-[10px] overflow-hidden p-8 my-8 bg-white"
                                                    style={{ width: 400 }}
                                                >
                                                    <div className="w-[400px] mx-auto px-10 py-[30px] bg-[#f4f5f9] rounded-[10px]">
                                                        <h3 className="text-sm font-bold text-[#313943] mb-[30px] uppercase">
                                                            Connecting Wallet
                                                        </h3>
                                                        <button
                                                            className="text-base text-[#313943] !no-underline hover:opacity-70 z-10 absolute w-10 h-10 flex justify-center items-center opacity-100"
                                                            style={{ top: 15, right: 23 }}
                                                        >
                                                            ✕
                                                        </button>
                                                        <div className="py-7 px-10 rounded-sm shadow-[0_14px_30px_0_rgba(28,60,125,0.04)] bg-white -mx-10 mb-5 flex">
                                                            <svg
                                                                viewBox="0 0 40 40"
                                                                className="motion-reduce:hidden animate-spin h-[30px] w-[30px] text-green"
                                                            >
                                                                <circle
                                                                    cx={20}
                                                                    cy={20}
                                                                    r={18}
                                                                    fill="#fff"
                                                                    className="donut-hole"
                                                                />
                                                                <circle
                                                                    cx={20}
                                                                    cy={20}
                                                                    r={18}
                                                                    fill="transparent"
                                                                    strokeWidth="1.75"
                                                                    stroke="#EFF3FB"
                                                                />
                                                                <circle
                                                                    cx={20}
                                                                    cy={20}
                                                                    r={18}
                                                                    fill="transparent"
                                                                    strokeWidth="1.75"
                                                                    stroke="#2ae2a0"
                                                                    strokeDasharray={110}
                                                                    strokeDashoffset={25}
                                                                />
                                                            </svg>
                                                            <p className="text-xl text-[#313943] font-medium ml-9">
                                                                Initializing...
                                                            </p>
                                                        </div>
                                                        <p className="text-xs leading-7 text-[#313943] text-left">
                                                            Note: Do not close/refresh browser while processing your
                                                            transaction.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex-none w-full md:w-[281px] bg-gray border-r border-[#e1e3f2] sticky top-0 h-screen">
                    <div className="bg-white py-7 px-[20px] md:px-[30px] flex items-center justify-between">
                        <div>
                            <a href="https://skyrush.io">
                                <img src="/images/skyrush-logo.svg" width={108} alt="skyrush-logo" />
                            </a>
                        </div>
                        <div className="md:hidden block">
                            <div className="relative group capitalize font-bold text-sm">
                                <button className="flex items-center lg:justify-start gap-1 text-[#caced6] uppercase">
                                    en
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-chevron-down"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <div className="absolute right-0 top-full bg-white w-[160px] shadow-[0_14px_30px_0_rgba(28,60,125,0.04)] rounded-[3px] p-1 hidden group-hover:block z-10">
                                    <ul className="bg-white rounded-[3px] shadow-[0_0_10px_0_rgba(28,60,125,0.08)] px-4 py-2 divide-y divide-[#efeff0] mx-0 text-xs font-normal">
                                        <li>
                                            <a
                                                href="/pro/airdrops/builder?package=free"
                                                aria-current="page"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize nuxt-link-exact-active nuxt-link-active"
                                            >
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
                                                    alt="English"
                                                    className="max-w-[15px]"
                                                />
                                                English
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/fr/pro/airdrops/builder?package=free"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                            >
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAHlBMVEU/QWPsGSD70tObh5n4qq0FFEDsGSD///+CiZ/6xsj0M3UIAAAABXRSTlP7wO/15OfQLf8AAAAzSURBVEjH7cuxDQAgCABBiIMwlXs7kjV0tua+/ORyR2/VGHXGSARBEARBEARBkI9JPJMLUC5doUB41rcAAAAASUVORK5CYII="
                                                    alt="Français"
                                                    className="max-w-[15px]"
                                                />
                                                Français
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/es/pro/airdrops/builder?package=free"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                            >
                                                <img
                                                    src="/images//lang/es.png"
                                                    alt="Español"
                                                    className="max-w-[15px]"
                                                />
                                                Español
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/id/pro/airdrops/builder?package=free"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                            >
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDAgMAAAAXJUhJAAAACVBMVEX/AAD/////c3NJD7FkAAAAH0lEQVQ4T2NgGAWjYBTQAKzCBRhCcYFRmVGZURnyZQCrGiKXmQyMiAAAAABJRU5ErkJggg=="
                                                    alt="Bahasa Spanyol"
                                                    className="max-w-[15px]"
                                                />
                                                Bahasa Spanyol
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/zh/pro/airdrops/builder?package=free"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                            >
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAMAAABdlVDoAAABa1BMVEXuHCX//wDuHSXuHiXxQh/6wQrvKyLyURzvLCLvKSP96QP5rg3vKiPwPCD1eBb1fBX1ghT3mBH94QX7zQj94wT/+gHyTh32jRL7yAn2hBTwMiH+8wLyWRv2ixP5sA3uICTuIiTwOyD81wb4nhDyTR3xPx///gD2hhT//ADvIyTyVRz94AX81QfzYhr0cxfxSR7xPh/6wgryUhz+8QLwNyH5tgzzZBn70Qf6tgzyUBz6vQr1eRbvJCTzYxrwOiDwNiHyTx30aBnvJyPuHyTwNSH/+wH95QT2ghTzXxr3jhL6ugvvKCP80gf0bhf+9wH4oQ/0aRj5qg76uAzyVxv+9AL2jBP3jxL5qQ782Ab2jRP3kBLvJSTyTxz3lhH2hRTvJCP95ATzWRvyVBzxQR/5twzyUB32hxP95gT97APwPR/4nRD3lBH4oA/xPiD++QH5tAzvMSL5rw30cRf80wf+9gH94wX4nBDzZhnuISoPOwXaAAABQ0lEQVR42u3MA3MsQQBF4XvHs7aNZ9u2bb9oYyf/Ptbslrc77K90SgeKYPcg2dEmmt8gm9+MfYRwFXhUyT8RC4KldWyhvzvEsTc5iKX7/mGL4PvAl16Ido51eB2rQrRZ9mvoNKJBHO0RmUKnu8PPf92CIA2SUXRKcfqigPvcihLJxGqeLGPd96fnyTq65lyhV6yBTQF74HImjO6FXnGLCRceZy9ACKPGdR8m0eY0BLnxmqtetCDPf676ComKXFWDRCdITj0k2UK7OxbECJLJrHZ1huxDu58hiBGh7wcAx2QcHpXwp8Txt+n7ECBjjmOZXkzm4HEmTj5zIYD1WMMa+wm8Xh4ZPQzZBgvGZ8jmAmUd8vy+CcncqO3PQrZTZOkBJCuQ+R4DUt2+NpS/BMk04PpfyKc52DcURVEURVEURVHmt8EiyW9Tyr2zNMUAAAAASUVORK5CYII="
                                                    alt="中国"
                                                    className="max-w-[15px]"
                                                />
                                                中国
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/ru/pro/airdrops/builder?package=free"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                            >
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAElBMVEX///8AMqDaKRzbLiE8L3tVdsBc/RZ1AAAAM0lEQVRIie3LMQEAMAjEwLeAhVqohVrAv5VqyMBEbr9EksY0lsIsFsvS8rAczGKxLC0X+9AM+QfXEXN7AAAAAElFTkSuQmCC"
                                                    alt="Русский"
                                                    className="max-w-[15px]"
                                                />
                                                Русский
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/pt/pro/airdrops/builder?package=free"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                            >
                                                <img
                                                    src="/images/lang/pt.png"
                                                    alt="Português"
                                                    className="max-w-[15px]"
                                                />
                                                Português
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/de/pro/airdrops/builder?package=free"
                                                className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                            >
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEUAAADdAAD/zgDGIigcAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg=="
                                                    alt="Deutsch"
                                                    className="max-w-[15px]"
                                                />
                                                Deutsch
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-[30px] md:pt-[38px] mb-[30px]">
                        <div>
                            <p className="text-sm font-medium text-black">
                                Select actions to be completed by contestants 👇
                            </p>
                        </div>
                    </div>
                    <div className="px-5 md:pb-[38px] overflow-y-auto h-[calc(100vh-270px)] sm:h-[calc(100vh-300px)] md:h-[calc(100vh-184px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray">
                        {TaskPlatformList.map((taskData) => {
                            return (
                                <TaskPlatformCard
                                    taskToDo={taskToDo}
                                    key={taskData.id}
                                    id={taskData.id}
                                    taskImgSrc={taskData.src}
                                    imgWidth={taskData.width}
                                    imgHeight={taskData.height}
                                    taskTitle={taskData.title}
                                    anyTaskAdded={taskData.anyTaskSelected}
                                    isPremium={taskData.isPremium}
                                    inputFieldsData={taskData.inputFields}
                                    isPlatformClicked={taskData.isPlatformClicked}
                                />
                            );
                        })}
                    </div>
                    <div className="px-5 py-5 md:hidden fixed bottom-0 inset-x-0">
                        <button className="px-8 py-[13px] bg-green rounded-[10px] w-full border border-green text-center text-sm font-bold text-white hover:bg-transparent hover:text-green transition-colors duration-300 uppercase">
                            Preview
                        </button>
                    </div>
                </div>
                <div className="flex-auto relative bg-gray md:block hidden">
                    <div className="p-5 sm:px-[30px] sm:py-[22px] md:py-[22px] lg:flex justify-between items-center relative">
                        <div className="ml-auto flex flex-1 justify-end mt-0 left-0 p-0 relative bg-transparent w-auto z-20">
                            <div className="uppercase text-xs font-bold flex sm:flex-row flex-col space-y-5 lg:space-y-0 items-start lg:items-center">
                                <section className="uppercase text-xs font-bold flex sm:flex-row lg:space-y-0 items-center lg:items-center">
                                    <div className="flex-1 mr-4">
                                        <div className="relative group capitalize font-bold text-sm">
                                            <button className="flex items-center lg:justify-start gap-1 text-[#caced6] uppercase">
                                                en
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-chevron-down"
                                                >
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                            <div className="absolute right-0 top-full bg-white w-[160px] shadow-[0_14px_30px_0_rgba(28,60,125,0.04)] rounded-[3px] p-1 hidden group-hover:block z-10">
                                                <ul className="bg-white rounded-[3px] shadow-[0_0_10px_0_rgba(28,60,125,0.08)] px-4 py-2 divide-y divide-[#efeff0] mx-0 text-xs font-normal">
                                                    <li>
                                                        <a
                                                            href="/pro/airdrops/builder?package=free"
                                                            aria-current="page"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize nuxt-link-exact-active nuxt-link-active"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
                                                                alt="English"
                                                                className="max-w-[15px]"
                                                            />
                                                            English
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/fr/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAHlBMVEU/QWPsGSD70tObh5n4qq0FFEDsGSD///+CiZ/6xsj0M3UIAAAABXRSTlP7wO/15OfQLf8AAAAzSURBVEjH7cuxDQAgCABBiIMwlXs7kjV0tua+/ORyR2/VGHXGSARBEARBEARBkI9JPJMLUC5doUB41rcAAAAASUVORK5CYII="
                                                                alt="Français"
                                                                className="max-w-[15px]"
                                                            />
                                                            Français
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/es/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="/images/lang/es.png"
                                                                alt="Español"
                                                                className="max-w-[15px]"
                                                            />
                                                            Español
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/id/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDAgMAAAAXJUhJAAAACVBMVEX/AAD/////c3NJD7FkAAAAH0lEQVQ4T2NgGAWjYBTQAKzCBRhCcYFRmVGZURnyZQCrGiKXmQyMiAAAAABJRU5ErkJggg=="
                                                                alt="Bahasa Spanyol"
                                                                className="max-w-[15px]"
                                                            />
                                                            Bahasa Spanyol
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/zh/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAMAAABdlVDoAAABa1BMVEXuHCX//wDuHSXuHiXxQh/6wQrvKyLyURzvLCLvKSP96QP5rg3vKiPwPCD1eBb1fBX1ghT3mBH94QX7zQj94wT/+gHyTh32jRL7yAn2hBTwMiH+8wLyWRv2ixP5sA3uICTuIiTwOyD81wb4nhDyTR3xPx///gD2hhT//ADvIyTyVRz94AX81QfzYhr0cxfxSR7xPh/6wgryUhz+8QLwNyH5tgzzZBn70Qf6tgzyUBz6vQr1eRbvJCTzYxrwOiDwNiHyTx30aBnvJyPuHyTwNSH/+wH95QT2ghTzXxr3jhL6ugvvKCP80gf0bhf+9wH4oQ/0aRj5qg76uAzyVxv+9AL2jBP3jxL5qQ782Ab2jRP3kBLvJSTyTxz3lhH2hRTvJCP95ATzWRvyVBzxQR/5twzyUB32hxP95gT97APwPR/4nRD3lBH4oA/xPiD++QH5tAzvMSL5rw30cRf80wf+9gH94wX4nBDzZhnuISoPOwXaAAABQ0lEQVR42u3MA3MsQQBF4XvHs7aNZ9u2bb9oYyf/Ptbslrc77K90SgeKYPcg2dEmmt8gm9+MfYRwFXhUyT8RC4KldWyhvzvEsTc5iKX7/mGL4PvAl16Ido51eB2rQrRZ9mvoNKJBHO0RmUKnu8PPf92CIA2SUXRKcfqigPvcihLJxGqeLGPd96fnyTq65lyhV6yBTQF74HImjO6FXnGLCRceZy9ACKPGdR8m0eY0BLnxmqtetCDPf676ComKXFWDRCdITj0k2UK7OxbECJLJrHZ1huxDu58hiBGh7wcAx2QcHpXwp8Txt+n7ECBjjmOZXkzm4HEmTj5zIYD1WMMa+wm8Xh4ZPQzZBgvGZ8jmAmUd8vy+CcncqO3PQrZTZOkBJCuQ+R4DUt2+NpS/BMk04PpfyKc52DcURVEURVEURVHmt8EiyW9Tyr2zNMUAAAAASUVORK5CYII="
                                                                alt="中国"
                                                                className="max-w-[15px]"
                                                            />
                                                            中国
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/ru/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAElBMVEX///8AMqDaKRzbLiE8L3tVdsBc/RZ1AAAAM0lEQVRIie3LMQEAMAjEwLeAhVqohVrAv5VqyMBEbr9EksY0lsIsFsvS8rAczGKxLC0X+9AM+QfXEXN7AAAAAElFTkSuQmCC"
                                                                alt="Русский"
                                                                className="max-w-[15px]"
                                                            />
                                                            Русский
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/pt/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="/images/lang/pt.png"
                                                                alt="Português"
                                                                className="max-w-[15px]"
                                                            />
                                                            Português
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/de/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEUAAADdAAD/zgDGIigcAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg=="
                                                                alt="Deutsch"
                                                                className="max-w-[15px]"
                                                            />
                                                            Deutsch
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="https://skyrush.io/airdrops/pricing"
                                        className="inline-block px-5 mr-3 rounded-[17px] p-2 text-xs font-bold text-[#caced6] text-center bg-transparent border border-[#caced6] cursor-pointer hover:bg-[#5a68ff] hover:border-[#5a68ff] hover:text-white transition-all duration-300"
                                    >
                                        Change Plan
                                    </a>
                                    <button className="inline-block px-5 rounded-[17px] p-2 text-xs font-bold text-[#caced6] text-center bg-transparent border border-[#caced6] hover:bg-[#5a68ff] hover:border-[#5a68ff] hover:text-white transition-all duration-300 uppercase">
                                        Login
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[960px] px-4 mx-auto mb-10 md:mt-0">
                        <h1 className="text-3xl font-bold text-black mb-[18px] capitalize">task edition</h1>
                        <p className="text-[13px] leading-4 font-bold text-[#c6cbd5] mb-4 md:mb-[30px] uppercase flex justify-between items-center">
                            edit Airdrop actions
                        </p>
                        <div className="mb-[22px] text-center font-normal capitalize">
                            <p className="font-[14px] leading-6 text-[#0ee29f]">Saved</p>
                        </div>
                        <p />
                        <div className="bg-white/50 w-full p-4 border-dashed border border-[#e7e7f0] mb-[160px] md:mb-[70px]">
                            <div className="max-w-[360px] mx-auto">
                                <div className="mb-[11px] bg-white flex justify-center items-center rounded-[10px] h-[360px] overflow-hidden relative border-2 border-dashed border-[#e7e7f0] cursor-pointer">
                                    <input type="file" style={{ display: 'none' }} />
                                    <div className="text-center">
                                        <img src="images/final-step-img.svg" className="w-[54px] mx-auto mb-6" />
                                        <p className="px-1 text-[15px] font-semibold text-[#313943] mb-[10px]">
                                            Upload the gift picture
                                        </p>
                                        <p className="px-1 text-[11px] leading-[21px] font-normal text-[#313943]">
                                            480x480 or higher recommended. Max 10 MB.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    id="tasks-panel"
                                    className="max-h-[calc(100vh-600px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray"
                                >
                                    <div>
                                        <ReactSortable
                                            list={taskToDo.map((item: any) => Object.assign({}, item))}
                                            setList={(newList)=>dispatch(updateTaskToList(newList))}
                                            handle=".handle"
                                        >
                                            {taskToDo?.map((data: any, index: any) => {
                                                return (
                                                    <ShowTaskToDoCard
                                                        platform={data.socialPlatform}
                                                        key={index}
                                                        index={index + 1}
                                                        task={data.task}
                                                    />
                                                );
                                            })}
                                        </ReactSortable>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row-reverse items-center justify-center space-y-2 sm:space-y-0 fixed bottom-0 inset-x-0 bg-white md:bg-[#fafafd] md:py-2 py-5 left-0 px-5 md:left-[281px] right-0 w-auto md:p-6 z-10">
                            <button
                                type="button"
                                className="flex align-center justify-center px-8 py-[13px] bg-green rounded-[10px] md:rounded-3xl w-full md:w-auto border border-green text-center text-sm font-bold text-white hover:bg-transparent hover:text-green transition-colors duration-300 uppercase"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 animate-spin mr-1"
                                    style={{ display: 'none' }}
                                >
                                    <circle
                                        cx={12}
                                        cy={12}
                                        r={10}
                                        stroke="currentColor"
                                        strokeWidth={4}
                                        className="opacity-25"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        className="opacity-75"
                                    />
                                </svg>
                                Continue
                            </button>
                            <button className="px-8 py-[13px] sm:mr-4 mr-0 bg-white rounded-[10px] md:rounded-3xl w-full md:w-auto border text-[#caced6] text-center bg-transparent border-[#caced6] text-sm font-bold hover:bg-transparent transition-colors duration-300 block md:hidden">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="overflow-x-hidden fixed inset-0 w-full h-full bg-white/90 backdrop-blur-[30px] z-50 bg-[#fafafd] overflow-y-auto"
                    style={{ backdropFilter: 'blur(30px)', display: 'none' }}
                >
                    <div className="px-5 md:px-[30px] py-[22px] flex justify-between items-center relative">
                        <div className="lg:mr-7 flex-none flex justify-between">
                            <a href="https://skyrush.io" className="relative z-20">
                                <svg
                                    width="751px"
                                    height="139px"
                                    viewBox="0 0 751 139"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    className="w-[108px] h-auto"
                                >
                                    <title>Skyrush</title> <desc>Created with Sketch.</desc> <defs />
                                    <g id="LOGOS" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="00_LOGO_05" transform="translate(-956.000000, -479.000000)">
                                            <g id="Group-7-Copy-2" transform="translate(956.000000, 479.000000)">
                                                <path
                                                    d="M241.315269,34.8088849 C247.95371,34.8088849 253.438917,36.0737795 257.832365,38.1940496 C259.39096,38.9462246 260.704191,39.7572406 261.781462,40.5750118 C262.449277,41.0819598 262.901039,41.4920295 263.147005,41.7537149 L263.864788,42.5173714 L263.394587,43.4540117 C263.186778,43.8679686 262.787233,44.543271 262.182774,45.3932127 C261.189993,46.7891801 259.96686,48.1814558 258.498774,49.4812022 C257.285805,50.5550845 255.954291,51.519585 254.500484,52.3470095 L253.389537,52.979297 L252.589054,51.9826948 C252.414651,51.7991448 252.284027,51.6756907 252.123544,51.5386843 C251.640218,51.1260616 251.023283,50.7051932 250.262362,50.3063103 C248.015928,49.1287057 245.066463,48.4122011 241.315269,48.4122011 C234.961074,48.4122011 231.892858,50.9686163 231.892858,55.4499363 C231.892858,61.9204753 234.100397,63.233518 244.313493,64.2542641 C244.727232,64.2956152 245.152228,64.3373391 246.022369,64.4225305 C257.975607,65.5800029 266.595709,73.4154286 266.595709,85.4697146 C266.595709,101.86213 257.931041,108.589463 238.550102,108.589463 C231.40434,108.589463 225.71158,107.158465 221.340039,104.754663 C219.783044,103.89851 218.501161,102.974083 217.475711,102.040781 C216.837196,101.459644 216.41542,100.987363 216.190119,100.682409 L215.642688,99.9414396 L216.056009,99.118104 C216.236268,98.7590273 216.574193,98.170024 217.071761,97.4266576 C217.891971,96.2012623 218.874841,94.977589 220.024929,93.8321013 C221.515722,92.3472702 223.179999,91.1040544 225.023402,90.1860394 L226.048606,89.6754878 L226.811202,90.5299772 C226.905221,90.6353256 227.131363,90.8583509 227.486841,91.1606283 C228.102262,91.6839458 228.842547,92.2116529 229.704859,92.7063579 C232.18707,94.1303933 235.13457,94.9861471 238.550102,94.9861471 C248.158871,94.9861471 251.567231,92.4792711 251.567231,86.8467687 C251.567231,79.8630814 248.742439,78.2407253 237.638917,76.9739058 C237.312962,76.936717 236.121914,76.8021329 236.165623,76.8070857 C235.561507,76.7386315 235.098622,76.6854086 234.63734,76.630996 C224.257097,75.3778169 216.86438,67.5865766 216.86438,56.8269903 C216.86438,41.0157041 224.383113,34.8088849 241.315269,34.8088849 Z M312.922383,107.35418 L311.705305,107.596622 C309.723768,107.991345 307.494825,108.176347 305.328894,108.176347 C303.632895,108.176347 302.006136,108.069223 300.502817,107.89044 C299.593522,107.782302 298.920106,107.672796 298.537708,107.596622 L297.330751,107.356196 L297.330751,1.3574202 L298.517659,1.10409988 C300.378245,0.706997621 302.590846,0.520238966 304.775861,0.520238966 C306.470548,0.520238966 308.121354,0.627179045 309.666001,0.805552279 C310.208153,0.868159045 310.699402,0.935414551 311.131818,1.00297335 C311.396185,1.04427682 311.585522,1.07717548 311.691847,1.09734678 L312.917742,1.32991675 L312.648811,62.4011026 L337.724022,35.0725223 L338.399319,35.0845329 C341.869263,35.1462484 345.115897,35.7305335 348.060249,36.6670869 C349.948011,37.2675553 351.321788,37.8756545 352.092234,38.2997246 L353.805935,39.2429822 L325.449912,68.7439296 L355.032293,104.462161 L353.509782,105.354174 C352.765386,105.790303 351.406559,106.408935 349.476968,107.016515 C346.679723,107.897299 343.490489,108.468873 339.944102,108.588609 L339.194916,108.613904 L312.662505,75.6464463 L312.922383,107.35418 Z M418.721599,36.4552681 L419.928556,36.2148421 C421.910093,35.8201197 424.139036,35.6351173 426.304967,35.6351173 C428.000966,35.6351173 429.627725,35.7422415 431.131044,35.9210244 C432.040339,36.0291626 432.713755,36.1386684 433.096153,36.2148421 L434.30311,36.4552681 L434.30311,106.125525 C434.30311,128.829613 425.170847,138.609242 405.151436,138.609242 C397.853797,138.609242 391.829308,136.852369 387.018168,133.913942 C385.319365,132.876389 383.892138,131.760463 382.724962,130.638239 C382.007898,129.948793 381.527665,129.396427 381.272124,129.051765 L380.709454,128.292864 L381.150844,127.457577 C381.35602,127.0693 381.741274,126.428506 382.306941,125.618394 C383.240219,124.281813 384.35357,122.947053 385.649761,121.698212 C386.941988,120.453189 388.349565,119.360759 389.874595,118.464979 L390.965382,117.824267 L391.780958,118.791307 C391.810386,118.826199 391.882986,118.908184 391.997197,119.0305 C392.196706,119.244168 392.434859,119.484886 392.710033,119.745909 C393.503953,120.498999 394.427874,121.254521 395.467903,121.959194 C398.41312,123.95473 401.671853,125.143631 405.151436,125.143631 C414.68812,125.143631 418.399679,120.572943 418.701366,106.920498 C418.068715,107.058552 417.40287,107.194615 416.714235,107.32423 C415.120137,107.624272 413.559988,107.86029 412.087176,108.007989 C410.990628,108.117955 409.965335,108.176347 409.022671,108.176347 C386.652384,108.176347 380.147514,100.468745 380.147514,77.0696849 L380.147514,36.4722986 L381.334422,36.2189783 C383.195008,35.821876 385.407609,35.6351173 387.592624,35.6351173 C389.287311,35.6351173 390.938117,35.7420574 392.482764,35.9204307 C393.024916,35.9830374 393.516165,36.0502929 393.948581,36.1178517 C394.212948,36.1591552 394.402285,36.1920538 394.50861,36.2122252 L395.729025,36.4437555 L395.729025,78.446739 C395.729025,91.2580242 397.806125,94.0222092 409.022671,94.0222092 C409.888993,94.0222092 410.84484,93.9995272 411.874878,93.9564872 C413.28088,93.8977375 414.781909,93.8031232 416.319498,93.6825374 C417.162132,93.6164537 417.970033,93.5461771 418.721599,93.4754497 L418.721599,36.4552681 Z M483.937865,49.3576467 L483.937865,107.356196 L482.730907,107.596622 C480.74937,107.991345 478.520428,108.176347 476.354496,108.176347 C474.658497,108.176347 473.031738,108.069223 471.528419,107.89044 C470.619125,107.782302 469.945708,107.672796 469.56331,107.596622 L468.356353,107.356196 L468.356353,37.1721044 L469.529893,36.9104223 C469.610519,36.8924439 469.760122,36.8603922 469.97521,36.8162865 C470.328746,36.7437909 470.740746,36.6632891 471.207724,36.5768016 C472.536517,36.3307003 474.043093,36.084977 475.699614,35.8558248 C480.429904,35.2014676 485.422587,34.8088849 490.45685,34.8088849 C494.829138,34.8088849 499.141375,35.128347 503.145742,35.7930722 L504.135037,35.9572953 L504.361393,36.934248 C504.7709,38.7016802 504.953137,40.5530646 504.953137,42.5056281 C504.953137,43.9638206 504.844361,45.3857883 504.66291,46.7186382 C504.553203,47.5244935 504.441975,48.1291845 504.364107,48.4781903 L504.058794,49.8466045 L502.672909,49.6342442 C499.578284,49.1600522 496.182363,48.9630227 492.392467,48.9630227 C489.893044,48.9630227 487.520748,49.0646489 485.354417,49.2338776 C484.844589,49.2737042 484.371404,49.3153979 483.937865,49.3576467 Z M584.036924,84.0926606 C584.036924,103.256382 576.73703,109.002579 556.820867,109.002579 C536.966384,109.002579 529.743069,103.299682 529.743069,84.230366 L529.743069,36.0421519 L530.950026,35.8017259 C532.931564,35.4070034 535.160506,35.2220011 537.326437,35.2220011 C539.022436,35.2220011 540.649196,35.3291253 542.152515,35.5079082 C543.061809,35.6160464 543.735225,35.7255522 544.117623,35.8017259 L545.324581,36.0421519 L545.324581,86.8467687 C545.324581,93.8288661 547.391544,95.1238525 556.820867,95.1238525 C566.382931,95.1238525 568.455412,93.8357962 568.455412,86.8467687 L568.455412,36.0591824 L569.642321,35.805862 C571.502906,35.4087598 573.715507,35.2220011 575.900522,35.2220011 C577.59521,35.2220011 579.246016,35.3289412 580.790663,35.5073144 C581.332815,35.5699212 581.824063,35.6371767 582.25648,35.7047355 C582.520847,35.746039 582.710184,35.7789376 582.816509,35.7991089 L584.036924,36.0306393 L584.036924,84.0926606 Z M638.255046,34.8088849 C644.893488,34.8088849 650.378694,36.0737795 654.772142,38.1940496 C656.330737,38.9462246 657.643968,39.7572406 658.721239,40.5750118 C659.389054,41.0819598 659.840816,41.4920295 660.086782,41.7537149 L660.804565,42.5173714 L660.334364,43.4540117 C660.126555,43.8679686 659.727011,44.543271 659.122551,45.3932127 C658.12977,46.7891801 656.906637,48.1814558 655.438551,49.4812022 C654.225582,50.5550845 652.894068,51.519585 651.440261,52.3470095 L650.329315,52.979297 L649.528831,51.9826948 C649.354428,51.7991448 649.223804,51.6756907 649.063321,51.5386843 C648.579995,51.1260616 647.96306,50.7051932 647.202139,50.3063103 C644.955706,49.1287057 642.00624,48.4122011 638.255046,48.4122011 C631.900851,48.4122011 628.832635,50.9686163 628.832635,55.4499363 C628.832635,61.9204753 631.040175,63.233518 641.25327,64.2542641 C641.66701,64.2956152 642.092005,64.3373391 642.962147,64.4225305 C654.915384,65.5800029 663.535486,73.4154286 663.535486,85.4697146 C663.535486,101.86213 654.870818,108.589463 635.489879,108.589463 C628.344118,108.589463 622.651357,107.158465 618.279816,104.754663 C616.722821,103.89851 615.440938,102.974083 614.415488,102.040781 C613.776973,101.459644 613.355197,100.987363 613.129896,100.682409 L612.582465,99.9414396 L612.995786,99.118104 C613.176046,98.7590273 613.51397,98.170024 614.011538,97.4266576 C614.831749,96.2012623 615.814618,94.977589 616.964706,93.8321013 C618.455499,92.3472702 620.119777,91.1040544 621.963179,90.1860394 L622.988383,89.6754878 L623.750979,90.5299772 C623.844998,90.6353256 624.07114,90.8583509 624.426619,91.1606283 C625.04204,91.6839458 625.782325,92.2116529 626.644636,92.7063579 C629.126848,94.1303933 632.074347,94.9861471 635.489879,94.9861471 C645.098648,94.9861471 648.507008,92.4792711 648.507008,86.8467687 C648.507008,79.8630814 645.682216,78.2407253 634.578695,76.9739058 C634.252739,76.936717 633.061691,76.8021329 633.1054,76.8070857 C632.501284,76.7386315 632.038399,76.6854086 631.577118,76.630996 C621.196875,75.3778169 613.804157,67.5865766 613.804157,56.8269903 C613.804157,41.0157041 621.322891,34.8088849 638.255046,34.8088849 Z M710.543331,107.356196 L709.336374,107.596622 C707.354837,107.991345 705.125894,108.176347 702.959963,108.176347 C701.263964,108.176347 699.637205,108.069223 698.133886,107.89044 C697.224591,107.782302 696.551175,107.672796 696.168777,107.596622 L694.96182,107.356196 L694.96182,1.3574202 L696.148728,1.10409988 C698.009314,0.706997621 700.221915,0.520238966 702.40693,0.520238966 C704.101617,0.520238966 705.752424,0.627179045 707.29707,0.805552279 C707.839222,0.868159045 708.330471,0.935414551 708.762888,1.00297335 C709.027254,1.04427682 709.216592,1.07717548 709.322916,1.09734678 L710.543331,1.32887711 L710.543331,36.1686327 C711.438833,36.0153839 712.383785,35.8634346 713.351606,35.7201446 C714.571397,35.5395495 715.75603,35.3835062 716.879954,35.2592889 C718.707235,35.0573358 720.306967,34.9465903 721.624843,34.9465903 C742.985302,34.9465903 750.5,43.7920778 750.5,66.7417795 L750.5,107.356196 L749.293043,107.596622 C748.910645,107.672796 748.237228,107.782302 747.327934,107.89044 C745.824615,108.069223 744.197856,108.176347 742.501857,108.176347 C740.394586,108.176347 738.267944,107.996844 736.143124,107.600034 L734.918488,107.371333 L734.918488,65.3647254 C734.918488,53.0937407 731.858329,49.1007281 721.624843,49.1007281 C720.444667,49.1007281 719.003985,49.1781364 717.364183,49.3213104 C716.202795,49.4227131 714.971006,49.5544857 713.701039,49.7093699 C712.60152,49.8434665 711.535123,49.9872136 710.543908,50.1309104 C710.54378,50.130929 710.543588,69.2060243 710.543331,107.356196 Z"
                                                    id="skyrush-copy"
                                                    fill="#313943"
                                                    fillRule="nonzero"
                                                />
                                                <g id="Group-4" fill="#5a68ff">
                                                    <path
                                                        d="M15.0316651,138.592339 C14.7937832,138.604146 14.554366,138.610119 14.3135537,138.610119 C6.44349603,138.610119 0.0635537172,132.230177 0.0635537172,124.360119 C0.0635537172,124.355772 0.0635556635,124.351426 0.0635595555,124.34708 L2.84217094e-14,124.286589 L0,71 L67.6893787,138.610119 L15.0503473,138.610119 L15.0316651,138.592339 Z M124.531889,0.517779978 C124.769771,0.505973355 125.009188,0.5 125.25,0.5 C133.120058,0.5 139.5,6.87994232 139.5,14.75 C139.5,14.7543469 139.499998,14.7586934 139.499994,14.7630394 L139.563554,14.8235296 L139.563554,68.1101191 L71.8741751,0.5 L124.513206,0.5 L124.531889,0.517779978 Z M44.7695526,8 L130.672619,93.9030663 C140.82625,104.056698 140.82625,120.518987 130.672619,130.672619 C120.518987,140.82625 104.056698,140.82625 93.9030663,130.672619 L8,44.7695526 C-2.15363159,34.615921 -2.15363159,18.1536316 8,8 C18.1536316,-2.15363159 34.615921,-2.15363159 44.7695526,8 Z"
                                                        id="Combined-Shape"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className="ml-auto flex flex-1 justify-end mt-0 left-0 p-0 relative bg-transparent w-auto z-20">
                            <div className="uppercase text-xs font-bold flex lg:flex-row flex-col space-y-5 lg:space-y-0 items-start lg:items-center">
                                <section className="uppercase text-xs font-bold flex items-center lg:items-center">
                                    <div className="flex-1 mr-4">
                                        <div className="relative group capitalize font-bold text-sm">
                                            <button className="flex items-center lg:justify-start gap-1 text-[#caced6] uppercase">
                                                en
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-chevron-down"
                                                >
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                            <div className="absolute right-0 top-full bg-white w-[160px] shadow-[0_14px_30px_0_rgba(28,60,125,0.04)] rounded-[3px] p-1 hidden group-hover:block z-10">
                                                <ul className="bg-white rounded-[3px] shadow-[0_0_10px_0_rgba(28,60,125,0.08)] px-4 py-2 divide-y divide-[#efeff0] mx-0 text-xs font-normal">
                                                    <li>
                                                        <a
                                                            href="/pro/airdrops/builder?package=free"
                                                            aria-current="page"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize nuxt-link-exact-active nuxt-link-active"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
                                                                alt="English"
                                                                className="max-w-[15px]"
                                                            />
                                                            English
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/fr/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAHlBMVEU/QWPsGSD70tObh5n4qq0FFEDsGSD///+CiZ/6xsj0M3UIAAAABXRSTlP7wO/15OfQLf8AAAAzSURBVEjH7cuxDQAgCABBiIMwlXs7kjV0tua+/ORyR2/VGHXGSARBEARBEARBkI9JPJMLUC5doUB41rcAAAAASUVORK5CYII="
                                                                alt="Français"
                                                                className="max-w-[15px]"
                                                            />
                                                            Français
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/es/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="/images/lang/es.png"
                                                                alt="Español"
                                                                className="max-w-[15px]"
                                                            />
                                                            Español
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/id/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDAgMAAAAXJUhJAAAACVBMVEX/AAD/////c3NJD7FkAAAAH0lEQVQ4T2NgGAWjYBTQAKzCBRhCcYFRmVGZURnyZQCrGiKXmQyMiAAAAABJRU5ErkJggg=="
                                                                alt="Bahasa Spanyol"
                                                                className="max-w-[15px]"
                                                            />
                                                            Bahasa Spanyol
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/zh/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAMAAABdlVDoAAABa1BMVEXuHCX//wDuHSXuHiXxQh/6wQrvKyLyURzvLCLvKSP96QP5rg3vKiPwPCD1eBb1fBX1ghT3mBH94QX7zQj94wT/+gHyTh32jRL7yAn2hBTwMiH+8wLyWRv2ixP5sA3uICTuIiTwOyD81wb4nhDyTR3xPx///gD2hhT//ADvIyTyVRz94AX81QfzYhr0cxfxSR7xPh/6wgryUhz+8QLwNyH5tgzzZBn70Qf6tgzyUBz6vQr1eRbvJCTzYxrwOiDwNiHyTx30aBnvJyPuHyTwNSH/+wH95QT2ghTzXxr3jhL6ugvvKCP80gf0bhf+9wH4oQ/0aRj5qg76uAzyVxv+9AL2jBP3jxL5qQ782Ab2jRP3kBLvJSTyTxz3lhH2hRTvJCP95ATzWRvyVBzxQR/5twzyUB32hxP95gT97APwPR/4nRD3lBH4oA/xPiD++QH5tAzvMSL5rw30cRf80wf+9gH94wX4nBDzZhnuISoPOwXaAAABQ0lEQVR42u3MA3MsQQBF4XvHs7aNZ9u2bb9oYyf/Ptbslrc77K90SgeKYPcg2dEmmt8gm9+MfYRwFXhUyT8RC4KldWyhvzvEsTc5iKX7/mGL4PvAl16Ido51eB2rQrRZ9mvoNKJBHO0RmUKnu8PPf92CIA2SUXRKcfqigPvcihLJxGqeLGPd96fnyTq65lyhV6yBTQF74HImjO6FXnGLCRceZy9ACKPGdR8m0eY0BLnxmqtetCDPf676ComKXFWDRCdITj0k2UK7OxbECJLJrHZ1huxDu58hiBGh7wcAx2QcHpXwp8Txt+n7ECBjjmOZXkzm4HEmTj5zIYD1WMMa+wm8Xh4ZPQzZBgvGZ8jmAmUd8vy+CcncqO3PQrZTZOkBJCuQ+R4DUt2+NpS/BMk04PpfyKc52DcURVEURVEURVHmt8EiyW9Tyr2zNMUAAAAASUVORK5CYII="
                                                                alt="中国"
                                                                className="max-w-[15px]"
                                                            />
                                                            中国
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/ru/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAElBMVEX///8AMqDaKRzbLiE8L3tVdsBc/RZ1AAAAM0lEQVRIie3LMQEAMAjEwLeAhVqohVrAv5VqyMBEbr9EksY0lsIsFsvS8rAczGKxLC0X+9AM+QfXEXN7AAAAAElFTkSuQmCC"
                                                                alt="Русский"
                                                                className="max-w-[15px]"
                                                            />
                                                            Русский
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/pt/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="/images/lang/pt.png"
                                                                alt="Português"
                                                                className="max-w-[15px]"
                                                            />
                                                            Português
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/de/pro/airdrops/builder?package=free"
                                                            className="flex gap-2 items-center py-3.5 hover:text-[#2f3944] text-[#313943] font-semibold capitalize"
                                                        >
                                                            <img
                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEUAAADdAAD/zgDGIigcAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg=="
                                                                alt="Deutsch"
                                                                className="max-w-[15px]"
                                                            />
                                                            Deutsch
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="inline-block rounded-[17px] py-2 px-4 text-xs font-bold text-[#caced6] text-center bg-transparent border border-[#caced6] hover:bg-[#5a68ff] hover:border-[#5a68ff] hover:text-white transition-all duration-300 uppercase">
                                        Login
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="text-center absolute inset-0 w-full h-full bg-[#fafafd] modal-popup-container before:inline-block before:h-full before:align-middle px-0">
                        <div className="align-middle inline-block text-left w-full">
                            <div className="my-0  p-0" style={{ width: '100%px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
