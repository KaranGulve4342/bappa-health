
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for routing and active link styling
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
0
export function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            {/* <Package2 className="h-6 w-6" /> */}
            ✨
            <span className='font-bold'>Bappa Morya✨</span>
          </NavLink>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'bg-muted' : ''}`
              }
            >
              <Home className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink 
              to="/dashboard/doctors" 
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'bg-muted' : ''}`
              }
            >
              <ShoppingCart className="h-4 w-4" />
              Doctors
            </NavLink>
            <NavLink 
              to="/dashboard/mediScan" 
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'bg-muted' : ''}`
              }
            >
              <Package className="h-4 w-4" />
              Mediscan 💊
            </NavLink>
            <NavLink 
              to="/customers" 
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'bg-muted' : ''}`
              }
            >
              <Users className="h-4 w-4" />
              Customers
            </NavLink>
            <NavLink 
              to="/analytics" 
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'bg-muted' : ''}`
              }
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto p-4">
          {/* <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}





































// // components/Sidebar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom'; // Use react-router-dom's Link for routing
// import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

// export function Sidebar() {
//   return (
//     <div className="hidden border-r bg-muted/40 md:block">
//       <div className="flex h-full max-h-screen flex-col gap-2">
//         <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
//           <Link to="/" className="flex items-center gap-2 font-semibold">
//             <Package2 className="h-6 w-6" />
//             <span>Acme Inc</span>
//           </Link>
//           <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
//             <Bell className="h-4 w-4" />
//             <span className="sr-only">Toggle notifications</span>
//           </Button>
//         </div>
//         <div className="flex-1">
//           <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
//             <Link to="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
//               <Home className="h-4 w-4" />
//               Dashboard
//             </Link>
//             <Link to="/dashboard/doctors" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
//               <ShoppingCart className="h-4 w-4" />
//               Doctors
//               {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
//                 6
//               </Badge> */}
//             </Link>
//             <Link to="/products" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
//               <Package className="h-4 w-4" />
//               Products
//             </Link>
//             <Link to="/customers" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
//               <Users className="h-4 w-4" />
//               Customers
//             </Link>
//             <Link to="/analytics" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
//               <LineChart className="h-4 w-4" />
//               Analytics
//             </Link>
//           </nav>
//         </div>
//         <div className="mt-auto p-4">
//           <Card>
//             <CardHeader className="p-2 pt-0 md:p-4">
//               <CardTitle>Upgrade to Pro</CardTitle>
//               <CardDescription>
//                 Unlock all features and get unlimited access to our support team.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
//               <Button size="sm" className="w-full">
//                 Upgrade
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

