package com.printer.hold

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import android.view.View
import android.widget.Chronometer
import android.os.SystemClock
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    private lateinit var button: Button
    private lateinit var text: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        val button = findViewById<Button>(R.id.button)
        val text = findViewById<Chronometer>(R.id.clock)

        button?.setOnClickListener(object : View.OnClickListener {

            var isWorking = false

            override fun onClick(v: View) {
                if (!isWorking) {

                    // Updating the Values in the Chronometer
                    text.base = SystemClock.elapsedRealtime()

                    text.start()

                    isWorking = true

                }else{
                    if(text.text.toString() == "00:03") { Toast.makeText(this@MainActivity, "Молодец, попал!", Toast.LENGTH_SHORT).show()
                    }else{ Toast.makeText(this@MainActivity, "Ну ты и мазила!!!", Toast.LENGTH_SHORT).show() }
                    text.stop()

                    // Calculate pause offset for later resume
                    isWorking = false
                }

            }
        })

    }
}