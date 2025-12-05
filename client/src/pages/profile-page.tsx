import Layout from "@/components/layout/Layout";
import { UserCircle, ChevronRight, Settings, CreditCard, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <Layout>
      <div className="bg-primary pt-12 pb-20 px-6 text-white rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
            <UserCircle className="w-12 h-12 text-white" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl">Alex Fieldman</h1>
            <p className="text-blue-100 text-sm">Senior Field Agent</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium">Level 4</span>
              <span className="bg-emerald-400/20 text-emerald-100 px-2 py-0.5 rounded text-xs font-medium border border-emerald-400/30">Verified</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold font-display">$4.2k</div>
            <div className="text-xs text-blue-200 uppercase tracking-wider">Earnings</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-display">48</div>
            <div className="text-xs text-blue-200 uppercase tracking-wider">Visits</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-display">12</div>
            <div className="text-xs text-blue-200 uppercase tracking-wider">Closes</div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 space-y-4">
        <div className="bg-white rounded-xl p-1 shadow-sm border border-slate-100">
          {[
            { icon: CreditCard, label: "Payment Methods", desc: "Stripe Connected" },
            { icon: Award, label: "Achievements", desc: "3 New Badges" },
            { icon: ShieldCheck, label: "Verification", desc: "KYC Completed" },
            { icon: Settings, label: "Settings", desc: "Notifications, Account" },
          ].map((item, i) => (
            <button key={item.label} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>
          ))}
        </div>

        <Button variant="destructive" className="w-full py-6 rounded-xl mt-8 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border-none shadow-none">
          Log Out
        </Button>
      </div>
    </Layout>
  );
}
