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
    showCatMenu: boolean

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

const Menu: React.FC<MenuProps> = ({ showCatMenu, setShowCatMenu, categories }) => {

    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onClick={() => setShowCatMenu(true)}
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <BsChevronDown size={14} />

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
                            <li className="cursor-pointer">
                                <Link href={!item.subMenu && (item?.url)?.toString()}>{item.name}</Link>
                            </li>
                        )}
                    </Fragment>
                );
            })}
        </ul>
    );
};

Menu.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            attributes: PropTypes.shape({
                slug: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                products: PropTypes.shape({
                    data: PropTypes.array.isRequired,
                }).isRequired,
            }).isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
export default Menu;
