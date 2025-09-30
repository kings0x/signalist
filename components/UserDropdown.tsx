import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import {Button} from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logout from "./Logout";
import NavItems from "./NavItems";

const UserDropdown = () => {

      const router = useRouter();

    const handleSignOut = async() =>{
        // router.push('/signin');
    }

    const User = {
        name: 'John',
        email: '8H1wU@example.com',
    }



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost"
        className='flex items-center gap-3 text-gray-400 hover:text-yellow-500'
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback
            className="text-sm font-bold text-yellow-900 bg-yellow-500"
            >
              {User.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {User.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback
              className="text-sm font-bold text-yellow-900 bg-yellow-500"
              >
                {User.name[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {User.name}
              </span>
              <span className="text-sm text-gray-500">
                {User.email}
              </span>
            </div>
          </div>
      
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem 
        onClick={handleSignOut}
        className="text-gray-100 text-md font-medium focus:bg-transparent ocus:text-yellow-500 transition-colors cursor-pointer hover:text-red-600"
        >
          <span className="hover:text-red-600 transition-colors">Logout</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />

        <nav className="sm:hidden">
          <NavItems/>
        </nav>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown