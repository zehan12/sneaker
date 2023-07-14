import React, { Fragment, useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import PropTypes from 'prop-types';

interface MenuProps {
    categories: {
        attributes: {
            slug: string;
            name: string;
            products: {
                data: any[];
            };
        };
        id: number;
    }[],
    setShowCatMenu: (args: boolean) => void,
    showCatMenu: boolean,
    setMobileMenu: (args: boolean) => void

}

const data: { id: number, name: string, url?: string, subMenu?: boolean }[] = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const MoblieMenu: React.FC<MenuProps> = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {

    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data.map((item) => {
                return (
                    <Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>
                                {showCatMenu && (

                                    // <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                    //     {categories?.map(
                                    //         ({ attributes: c, id }) => {
                                    //             return (
                                    //                 <Link
                                    //                     key={id}
                                    //                     href={`/category/${c.slug}`}
                                    //                     onClick={() =>
                                    //                         setShowCatMenu(
                                    //                             false
                                    //                         )
                                    //                     }
                                    //                 >
                                    //                     <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                    //                         {c.name}
                                    //                         <span className="opacity-50 text-sm">
                                    //                             {`(${c.products.data.length})`}
                                    //                         </span>
                                    //                     </li>
                                    //                 </Link>
                                    //             );
                                    //         }
                                    //     )}
                                    // </ul>

                                    <ul>
                                        {subMenuData.map((item) => (<li key={item.id}>{item.name}</li>))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="py-4 px-5 border-b">
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </Fragment>
                );
            })}
        </ul>
    );
};

// Menu.propTypes = {
//     categories: PropTypes.arrayOf(
//         PropTypes.shape({
//             attributes: PropTypes.shape({
//                 slug: PropTypes.string.isRequired,
//                 name: PropTypes.string.isRequired,
//                 products: PropTypes.shape({
//                     data: PropTypes.array.isRequired,
//                 }).isRequired,
//             }).isRequired,
//             id: PropTypes.number.isRequired,
//         })
//     ).isRequired,
// };
export default MoblieMenu;