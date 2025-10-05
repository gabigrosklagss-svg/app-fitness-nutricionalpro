"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  User, 
  Target, 
  Utensils, 
  Dumbbell, 
  Camera, 
  BarChart3, 
  Crown, 
  Trophy, 
  Calendar,
  Clock,
  Zap,
  Heart,
  Droplets,
  Footprints,
  Share2,
  Download,
  MessageCircle,
  CheckCircle,
  Star,
  Lock,
  Unlock
} from 'lucide-react'

interface UserProfile {
  weight: string
  height: string
  age: string
  goal: string
  name: string
}

interface Meal {
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  time: string
}

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  muscle: string
}

interface Achievement {
  id: string
  title: string
  description: string
  unlocked: boolean
  icon: string
}

export default function FitnessApp() {
  const [currentTab, setCurrentTab] = useState('profile')
  const [userProfile, setUserProfile] = useState<UserProfile>({
    weight: '',
    height: '',
    age: '',
    goal: '',
    name: ''
  })
  const [isPremium, setIsPremium] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [dailyProgress, setDailyProgress] = useState({
    calories: 1250,
    caloriesGoal: 2000,
    water: 6,
    waterGoal: 8,
    steps: 8500,
    stepsGoal: 10000,
    workouts: 1,
    workoutsGoal: 1
  })

  const sampleMeals: Meal[] = [
    { name: 'Aveia com Banana', calories: 320, protein: 12, carbs: 58, fat: 6, time: '08:00' },
    { name: 'Frango Grelhado + Arroz', calories: 450, protein: 35, carbs: 45, fat: 8, time: '12:30' },
    { name: 'Salada de Atum', calories: 280, protein: 25, carbs: 15, fat: 12, time: '15:00' },
    { name: 'Salmão + Batata Doce', calories: 380, protein: 28, carbs: 35, fat: 14, time: '19:00' }
  ]

  const sampleWorkout: Exercise[] = [
    { name: 'Supino Reto', sets: 4, reps: '8-12', rest: '90s', muscle: 'Peito' },
    { name: 'Agachamento', sets: 4, reps: '10-15', rest: '120s', muscle: 'Pernas' },
    { name: 'Remada Curvada', sets: 3, reps: '8-12', rest: '90s', muscle: 'Costas' },
    { name: 'Desenvolvimento', sets: 3, reps: '10-12', rest: '90s', muscle: 'Ombros' }
  ]

  const achievements: Achievement[] = [
    { id: '1', title: 'Primeiro Treino', description: 'Complete seu primeiro treino', unlocked: true, icon: '🏋️' },
    { id: '2', title: 'Semana Completa', description: 'Treine 7 dias seguidos', unlocked: false, icon: '🔥' },
    { id: '3', title: 'Meta de Água', description: 'Beba 8 copos de água por dia', unlocked: true, icon: '💧' },
    { id: '4', title: 'Foto Perfeita', description: 'Registre 10 refeições por foto', unlocked: false, icon: '📸' }
  ]

  const handlePremiumFeature = () => {
    if (!isPremium) {
      setShowPaywall(true)
    }
  }

  const ProfileSetup = () => (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">Vamos começar sua jornada!</CardTitle>
        <CardDescription>Conte-nos sobre você para criarmos o plano perfeito</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={userProfile.name}
              onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Idade</Label>
            <Input
              id="age"
              type="number"
              placeholder="25"
              value={userProfile.age}
              onChange={(e) => setUserProfile({...userProfile, age: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              value={userProfile.weight}
              onChange={(e) => setUserProfile({...userProfile, weight: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Altura (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="175"
              value={userProfile.height}
              onChange={(e) => setUserProfile({...userProfile, height: e.target.value})}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Qual seu objetivo?</Label>
          <Select value={userProfile.goal} onValueChange={(value) => setUserProfile({...userProfile, goal: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione seu objetivo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lose">🎯 Emagrecer</SelectItem>
              <SelectItem value="gain">💪 Ganhar massa muscular</SelectItem>
              <SelectItem value="maintain">⚖️ Manter saúde</SelectItem>
              <SelectItem value="tone">✨ Definir músculos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-3"
          onClick={() => setCurrentTab('dashboard')}
        >
          <Target className="w-5 h-5 mr-2" />
          Criar Meu Plano Personalizado
        </Button>
      </CardContent>
    </Card>
  )

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Header com saudação */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Olá, {userProfile.name || 'Atleta'}! 👋</h2>
        <p className="opacity-90">Você está indo muito bem! Continue assim.</p>
      </div>

      {/* Cards de progresso diário */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-500">Calorias</span>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">{dailyProgress.calories}</div>
            <Progress value={(dailyProgress.calories / dailyProgress.caloriesGoal) * 100} className="h-2" />
            <div className="text-xs text-gray-500">Meta: {dailyProgress.caloriesGoal}</div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-500">Água</span>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">{dailyProgress.water}</div>
            <Progress value={(dailyProgress.water / dailyProgress.waterGoal) * 100} className="h-2" />
            <div className="text-xs text-gray-500">Meta: {dailyProgress.waterGoal} copos</div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Footprints className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500">Passos</span>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">{dailyProgress.steps.toLocaleString()}</div>
            <Progress value={(dailyProgress.steps / dailyProgress.stepsGoal) * 100} className="h-2" />
            <div className="text-xs text-gray-500">Meta: {dailyProgress.stepsGoal.toLocaleString()}</div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-500">Treinos</span>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">{dailyProgress.workouts}</div>
            <Progress value={(dailyProgress.workouts / dailyProgress.workoutsGoal) * 100} className="h-2" />
            <div className="text-xs text-gray-500">Meta: {dailyProgress.workoutsGoal}</div>
          </div>
        </Card>
      </div>

      {/* Conquistas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Suas Conquistas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  achievement.unlocked
                    ? 'border-yellow-300 bg-yellow-50'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="font-semibold text-sm">{achievement.title}</div>
                <div className="text-xs text-gray-500 mt-1">{achievement.description}</div>
                {achievement.unlocked && (
                  <CheckCircle className="w-4 h-4 text-green-500 mx-auto mt-2" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const DietPlan = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Seu Plano Alimentar</h2>
          <p className="text-gray-600">Cardápio personalizado para {userProfile.goal === 'lose' ? 'emagrecimento' : userProfile.goal === 'gain' ? 'ganho de massa' : 'manutenção'}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            PDF
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Refeições do dia */}
      <div className="grid gap-4">
        {sampleMeals.map((meal, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{meal.name}</h3>
                  <p className="text-sm text-gray-500">{meal.time}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{meal.calories} kcal</div>
                <div className="text-xs text-gray-500">
                  P: {meal.protein}g | C: {meal.carbs}g | G: {meal.fat}g
                </div>
              </div>
            </div>
            
            {!isPremium && index > 0 && (
              <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Desbloqueie substituições automáticas</span>
                </div>
                <Button size="sm" onClick={handlePremiumFeature}>
                  <Crown className="w-4 h-4 mr-1" />
                  Premium
                </Button>
              </div>
            )}
            
            {isPremium && (
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm">Substituir</Button>
                <Button variant="outline" size="sm">Ajustar Porção</Button>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Lista de compras */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Lista de Compras da Semana
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!isPremium ? (
            <div className="text-center py-8">
              <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Lista de Compras Premium</h3>
              <p className="text-gray-600 mb-4">Gere automaticamente sua lista baseada no cardápio semanal</p>
              <Button onClick={handlePremiumFeature}>
                <Crown className="w-4 h-4 mr-2" />
                Desbloquear Premium
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Aveia', 'Banana', 'Frango', 'Arroz', 'Atum', 'Salmão', 'Batata Doce', 'Alface'].map((item) => (
                <div key={item} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )

  const WorkoutPlan = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Treino de Hoje</h2>
          <p className="text-gray-600">Treino de força - Peito e Pernas</p>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          <Clock className="w-4 h-4 mr-1" />
          45 min
        </Badge>
      </div>

      {/* Exercícios */}
      <div className="space-y-4">
        {sampleWorkout.map((exercise, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{exercise.name}</h3>
                  <p className="text-sm text-gray-500">{exercise.muscle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">{exercise.sets} séries</div>
                <div className="text-sm text-gray-500">{exercise.reps} reps</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Descanso: {exercise.rest}
              </div>
              {!isPremium && index > 0 && (
                <Button size="sm" variant="outline" onClick={handlePremiumFeature}>
                  <Lock className="w-4 h-4 mr-1" />
                  Ver Vídeo
                </Button>
              )}
              {isPremium && (
                <Button size="sm" variant="outline">
                  <Star className="w-4 h-4 mr-1" />
                  Ver Vídeo
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Treinos da semana */}
      <Card>
        <CardHeader>
          <CardTitle>Cronograma da Semana</CardTitle>
        </CardHeader>
        <CardContent>
          {!isPremium ? (
            <div className="text-center py-8">
              <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Treinos Ilimitados Premium</h3>
              <p className="text-gray-600 mb-4">Acesse treinos personalizados para todos os dias</p>
              <Button onClick={handlePremiumFeature}>
                <Crown className="w-4 h-4 mr-2" />
                Desbloquear Premium
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map((day) => (
                <div key={day} className="p-3 border rounded-lg">
                  <div className="font-semibold">{day}</div>
                  <div className="text-sm text-gray-600">Treino disponível</div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )

  const CalorieCounter = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contador de Calorias</h2>
        <p className="text-gray-600">Tire uma foto do seu prato e descubra as calorias automaticamente</p>
      </div>

      {!isPremium ? (
        <Card className="p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4">Recurso Premium</h3>
          <p className="text-gray-600 mb-6">
            Use IA avançada para reconhecer alimentos e calcular calorias automaticamente através de fotos
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Reconhecimento automático de alimentos
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Cálculo preciso de macronutrientes
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Histórico completo com fotos
            </div>
          </div>
          <Button onClick={handlePremiumFeature} className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
            <Crown className="w-4 h-4 mr-2" />
            Desbloquear por R$ 12,90/semana
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          <Card className="p-6 border-2 border-dashed border-gray-300 text-center">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Tire uma foto do seu prato</h3>
            <p className="text-gray-600 mb-4">A IA irá reconhecer os alimentos automaticamente</p>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-600">
              <Camera className="w-4 h-4 mr-2" />
              Abrir Câmera
            </Button>
          </Card>

          {/* Histórico de fotos */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Refeições</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sampleMeals.slice(0, 3).map((meal, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Camera className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{meal.name}</div>
                      <div className="text-sm text-gray-500">{meal.time} - {meal.calories} kcal</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )

  const PaywallModal = () => (
    <Dialog open={showPaywall} onOpenChange={setShowPaywall}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            Desbloqueie Tudo!
          </DialogTitle>
          <DialogDescription className="text-center">
            Acesse todos os recursos premium e acelere seus resultados
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Planos */}
          <div className="space-y-3">
            <Card className="p-4 border-2 border-blue-500 bg-blue-50">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-bold">Plano Mensal</div>
                  <div className="text-sm text-gray-600">Mais Popular</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">R$ 39,90</div>
                  <div className="text-sm text-gray-500">/mês</div>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Recomendado</Badge>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold">Plano Semanal</div>
                  <div className="text-sm text-gray-600">Teste primeiro</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">R$ 12,90</div>
                  <div className="text-sm text-gray-500">/semana</div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold">Plano Anual</div>
                  <div className="text-sm text-green-600">Economize 18%</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">R$ 390</div>
                  <div className="text-sm text-gray-500">/ano</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefícios */}
          <div className="space-y-2">
            <h4 className="font-semibold">Você terá acesso a:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Treinos ilimitados personalizados
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Planos alimentares completos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Contagem de calorias por foto
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Relatórios detalhados
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Coach virtual por IA
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            onClick={() => {
              setIsPremium(true)
              setShowPaywall(false)
            }}
          >
            <Crown className="w-4 h-4 mr-2" />
            Começar Agora - R$ 39,90/mês
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Cancele a qualquer momento. Sem compromisso.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )

  const CoachChat = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Coach Virtual</h2>
        <p className="text-gray-600">Tire suas dúvidas sobre treino e nutrição com IA</p>
      </div>

      {!isPremium ? (
        <Card className="p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4">Coach Premium</h3>
          <p className="text-gray-600 mb-6">
            Converse com nosso coach virtual especializado em fitness e nutrição
          </p>
          <Button onClick={handlePremiumFeature} className="bg-gradient-to-r from-purple-500 to-pink-600">
            <Crown className="w-4 h-4 mr-2" />
            Desbloquear Coach
          </Button>
        </Card>
      ) : (
        <Card className="h-96 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat com Coach
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">Olá! Sou seu coach virtual. Como posso ajudar hoje?</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg max-w-xs ml-auto">
                <p className="text-sm">Qual o melhor horário para treinar?</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">O melhor horário é quando você consegue ser consistente! Manhã acelera o metabolismo, tarde você tem mais energia.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Digite sua pergunta..." className="flex-1" />
              <Button>Enviar</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">FitLife Pro</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {isPremium && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              )}
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="diet" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span className="hidden sm:inline">Dieta</span>
            </TabsTrigger>
            <TabsTrigger value="workout" className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              <span className="hidden sm:inline">Treino</span>
            </TabsTrigger>
            <TabsTrigger value="calories" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Calorias</span>
            </TabsTrigger>
            <TabsTrigger value="coach" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Coach</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileSetup />
          </TabsContent>

          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>

          <TabsContent value="diet">
            <DietPlan />
          </TabsContent>

          <TabsContent value="workout">
            <WorkoutPlan />
          </TabsContent>

          <TabsContent value="calories">
            <CalorieCounter />
          </TabsContent>

          <TabsContent value="coach">
            <CoachChat />
          </TabsContent>
        </Tabs>
      </main>

      {/* Paywall Modal */}
      <PaywallModal />

      {/* Floating Premium Button */}
      {!isPremium && (
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={() => setShowPaywall(true)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg rounded-full px-6 py-3"
          >
            <Crown className="w-5 h-5 mr-2" />
            Premium
          </Button>
        </div>
      )}
    </div>
  )
}